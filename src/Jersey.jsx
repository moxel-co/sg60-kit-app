import { useRef, useEffect, useState } from 'react' 
import { useFrame, useLoader } from '@react-three/fiber'
import { Text, PerspectiveCamera, useGLTF, useTexture, Decal, RenderTexture } from '@react-three/drei'
import * as THREE from 'three'
import useVariant from './stores/useVariant.jsx'
import LayeredMaterial from './components/LayeredMaterial.jsx'

import { ColorSwatches } from './data/colors.ts';
import { jerseyVariants } from './data/jersey.ts';
import { FontVariants } from './data/fonts.ts';

const asset_name = 'prpJersey'

export function Jersey(props) {
  const { nodes, materials } = useGLTF(`./assets/${asset_name}/model.glb`)

  const colorState = useVariant((state) => state.color);
  const poseState = useVariant((state) => state.pose);
  const baseState = useVariant((state) => state.base);
  const motifState = useVariant((state) => state.motif);
  const fontState = useVariant((state) => state.font);
  const graphicsState = useVariant((state) => state.graphics);
  const jerseyNameState = useVariant((state) => state.jerseyName).toUpperCase();
  const jerseyNumberState = useVariant((state) => state.jerseyNumber);

  const jerseyRef = useRef()

  // Color library
  const color = ColorSwatches.find((color) => color.id === colorState);
  const motif = jerseyVariants.find((variant) => variant.id === motifState);
  const font = FontVariants.find((variant) => variant.id === fontState);
  const base = jerseyVariants.find((variant) => variant.id === baseState);
  const graphics = jerseyVariants.find((variant) => variant.id === graphicsState);
  const texture = base.texture

  // Define textures
  const t_color = useLoader(THREE.TextureLoader, `./assets/${asset_name}/color.png`);
  const t_normal = useLoader(THREE.TextureLoader, `./assets/${asset_name}/normal.png`);
  const t_texture = useLoader(THREE.TextureLoader, `./assets/prpJersey/${texture}.png`);
  const t_graphics = useLoader(THREE.TextureLoader, `./assets/prpJersey/${graphics.texture}.png`);
  const motifMap = useLoader(THREE.TextureLoader, `/assets/prpJersey/${motif.texture}.png`);
  t_normal.flipY = false;
  t_color.flipY = false;
  t_normal.repeat = new THREE.Vector2(1, 1);
  t_normal.wrapS = THREE.RepeatWrapping;
  t_normal.wrapT = THREE.RepeatWrapping;

  // Define material library
  const m_jersyMat = new THREE.MeshStandardMaterial({map: t_color, roughness: 0.7, normalMap: t_normal, normalScale: new THREE.Vector2(0.3, 0.3)})
  const m_grey = new THREE.MeshStandardMaterial({color: 0x555555, roughness: 0.7, metalness: 0.2})
  const m_body = new THREE.MeshStandardMaterial({color: 0x333333, roughness: 0.2, metalness: 1})
  const m_jerseyLayered = LayeredMaterial({
    base_texture: t_texture,
    motif_texture: motifMap,
    graphics_texture: t_graphics,
    primary_color: color.primary_color,
    secondary_color: color.secondary_color,
    tertiary_color: color.tertiary_color,
    icon_color: color.icon_color,
  })
  const m_text = new THREE.MeshBasicMaterial({ color: color.primary_color })



// Create a mapping between material names and material objects
  const materialMapping = {
    '_jersey_': m_jerseyLayered,
    '_shorts_': m_body,
    '_socks_': m_body,
    '_body_': m_body,
  }

  // Assign materials to geometries based on their names
  Object.keys(nodes).forEach(key => {
    Object.keys(materialMapping).forEach(materialKey => {
      if (key.includes(materialKey)) {
        nodes[key].material = materialMapping[materialKey]
      }
    })
  })


  const NameDecal = ({ position, rotation = [0, 0, 0], scale = [1, 1, 1] }) => {

    return (
      <Decal position={position} rotation={rotation} scale={scale} mesh={jerseyRef}>
              <meshStandardMaterial transparent polygonOffset polygonOffsetFactor={-2}>
                <RenderTexture attach="map">
                  <PerspectiveCamera makeDefault manual aspect={1.5} position={[0, 0, 10]} rotation={[0,0,0]} />
                  <Text fontSize={font.name_size} material={m_text} font={font.path}>
                    {jerseyNameState}
                  </Text>
                </RenderTexture>
              </meshStandardMaterial>
            </Decal>
    );
  };

  const NumberDecal = ({ position, rotation = [0, 0, 0], scale = [1, 1, 1] }) => {

    return (
      <Decal position={position} rotation={rotation} scale={scale} mesh={jerseyRef}> 
              <meshStandardMaterial transparent polygonOffset polygonOffsetFactor={-3}>
                <RenderTexture attach="map">
                  <PerspectiveCamera makeDefault manual aspect={1.5} position={[0, 0, 10]} rotation={[0,0,0]} />
                  <Text fontSize={font.number_size} material={m_text} font={font.path}>
                    {jerseyNumberState}
                  </Text>
                </RenderTexture>
              </meshStandardMaterial>
            </Decal>
    );
  };

  const LoadFont = () => {
    return (
      <group>
        <Text font="/assets/font/ArsenalUEFA1516.ttf"></Text>
        <Text font="/assets/font/Brazil2018.ttf"></Text>
        <Text font="/assets/font/mexcellent.ttf"></Text>
        <Text font="/assets/font/Nigeria2018.ttf"></Text>
        <Text font="/assets/font/PremierLeagueFont2018.ttf"></Text>
        <Text font="/assets/font/real-madrid-15-16.ttf"></Text>
        <Text font="/assets/font/real-madrid-16-17.ttf"></Text>
        <Text font="/assets/font/soccer-jersey.ttf"></Text>
      </group>
    );
  };



  return (
    <group {...props} dispose={null}>
      <group name='default' visible={poseState === 'default'}>
        <LoadFont />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.default_jersey_geo.geometry}
          material={nodes.default_jersey_geo.material}
          {...(poseState === 'default' ? { ref: jerseyRef } : {})}
        />
        {poseState === 'default' && <NameDecal position={[-0.05, 8.6, -0.7]} rotation={[Math.PI*1.05,  Math.PI*0, Math.PI*1]} scale={[2, 0.8, 1]}/>}
        {poseState === 'default' && <NumberDecal position={[-0.05, 7.6, -0.7]} rotation={[Math.PI*0.96,  Math.PI*0, Math.PI*1]} scale={[2, 1.5, 1]}/>}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.default_shorts_geo.geometry}
          material={nodes.default_shorts_geo.material}
          visible={false}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.default_socks_geo.geometry}
          material={nodes.default_socks_geo.material}
          visible={false}
        />
      </group>
      <group name='poseA' visible={poseState === 'poseA'}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.poseA_body_geo.geometry}
          material={nodes.poseA_body_geo.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.poseA_jersey_geo.geometry}
          material={nodes.poseA_jersey_geo.material}
          {...(poseState === 'poseA' ? { ref: jerseyRef } : {})}
        />
        {poseState === 'poseA' && <NameDecal position={[-0.05, 8.6, -0.7]} rotation={[Math.PI*1.05,  Math.PI*0, Math.PI*1]} scale={[2, 0.8, 1]}/>}
        {poseState === 'poseA' && <NumberDecal position={[-0.05, 7.6, -0.7]} rotation={[Math.PI*0.96,  Math.PI*0, Math.PI*1]} scale={[2, 1.5, 1]}/>}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.poseA_shorts_geo.geometry}
          material={nodes.poseA_shorts_geo.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.poseA_socks_geo.geometry}
          material={nodes.poseA_socks_geo.material}
        />
      </group>
      <group name='poseB' visible={poseState === 'poseB'}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.poseB_body_geo.geometry}
          material={nodes.poseB_body_geo.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.poseB_jersey_geo.geometry}
          material={nodes.poseB_jersey_geo.material}
          {...(poseState === 'poseB' ? { ref: jerseyRef } : {})}
        />
        {poseState === 'poseB' && <NameDecal position={[-0.07, 8.6, -0.7]} rotation={[Math.PI*1.05,  Math.PI*0.07, Math.PI*1]} scale={[2, 0.8, 1]}/>}
        {poseState === 'poseB' && <NumberDecal position={[-0.07, 7.6, -0.7]} rotation={[Math.PI*0.96,  Math.PI*0.07, Math.PI*1]} scale={[2, 1.5, 1]}/>}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.poseB_shorts_geo.geometry}
          material={nodes.poseB_shorts_geo.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.poseB_socks_geo.geometry}
          material={nodes.poseB_socks_geo.material}
        />
      </group>
      <group name='poseC' visible={poseState === 'poseC'} >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.poseC_body_geo.geometry}
          material={nodes.poseC_body_geo.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.poseC_jersey_geo.geometry}
          material={nodes.poseC_jersey_geo.material}
          {...(poseState === 'poseC' ? { ref: jerseyRef } : {})}
        />
        {poseState === 'poseC' && <NameDecal position={[-0.15, 8.6, -0.7]} rotation={[Math.PI*1.1,  Math.PI*-0.05, Math.PI*1.01]} scale={[2, 0.8, 1]}/>}
        {poseState === 'poseC' && <NumberDecal position={[-0.12, 7.6, -0.7]} rotation={[Math.PI*0.92,  Math.PI*-0.02, Math.PI*0.98]} scale={[2, 1.5, 1]}/>}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.poseC_shorts_geo.geometry}
          material={nodes.poseC_shorts_geo.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.poseC_socks_geo.geometry}
          material={nodes.poseC_socks_geo.material}
        />
      </group>
    </group>
  )
}

useGLTF.preload(`./assets/${asset_name}/model.glb`)
useTexture.preload(`./assets/${asset_name}/tex_base_stripes.png`)
useTexture.preload(`./assets/${asset_name}/tex_base_wavy.png`)
useTexture.preload(`./assets/${asset_name}/motif-merlion.png`)
useTexture.preload(`./assets/${asset_name}/motif-stars.png`)
useTexture.preload(`./assets/${asset_name}/motif-singlish.png`)
useTexture.preload(`./assets/${asset_name}/motif-peranakan.png`)