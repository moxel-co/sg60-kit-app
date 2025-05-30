import { useRef, useEffect, useState } from 'react' 
import { useFrame, useLoader } from '@react-three/fiber'
import { Text, PerspectiveCamera, useGLTF, useTexture, Decal, RenderTexture } from '@react-three/drei'
import * as THREE from 'three'
import useVariant from './stores/useVariant.jsx'
import LayeredMaterial from './components/LayeredMaterial.jsx'

import { ColorSwatches } from './data/colors.ts';
import { jerseyVariants } from './data/jersey.ts';

const asset_name = 'prpJersey'

export function Jersey(props) {
  const { nodes, materials } = useGLTF(`./assets/${asset_name}/model.glb`)

  const colorState = useVariant((state) => state.color);
  const poseState = useVariant((state) => state.pose);
  const textureState = useVariant((state) => state.texture);
  const motifState = useVariant((state) => state.motif);
  const jerseyNameState = useVariant((state) => state.jerseyName);
  const jerseyNumberState = useVariant((state) => state.jerseyNumber);

  const jerseyRef = useRef()


  // Color library
  const color = ColorSwatches.find((color) => color.id === colorState);
  const motif = jerseyVariants.find((variant) => variant.id === motifState);


  // Define textures
  const t_color = useLoader(THREE.TextureLoader, `./assets/${asset_name}/color.png`);
  const t_normal = useLoader(THREE.TextureLoader, `./assets/${asset_name}/normal.png`);
  const texture = useLoader(THREE.TextureLoader, `./assets/prpJersey/${textureState}.png`);
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
    base_texture: texture,
    motif_texture: motifMap,
    primary_color: color.primary_color,
    secondary_color: color.secondary_color
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

  const NumberDecal = ({ meshRef, position, rotation = [0, 0, 0], scale = [1, 1, 1] }) => {

    return (
      <Decal position={[-0.1, 7.7, -0.7]} rotation={[Math.PI*0.9,  Math.PI*-0.02, Math.PI*0.99]} scale={[2, 2, 1]} mesh={jerseyRef}>
              <meshStandardMaterial transparent polygonOffset polygonOffsetFactor={-1}>
                <RenderTexture attach="map">
                  <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 10]} rotation={[0,0,0]} />
                  <ambientLight intensity={Math.PI} />
                  <directionalLight position={[10, 10, 5]} />
                  <Text position={[0,4,0]} fontSize={1} material={m_text}>
                    {jerseyNameState}
                  </Text>
                  <Text fontSize={6} material={m_text}>
                    {jerseyNumberState}
                  </Text>
                </RenderTexture>
              </meshStandardMaterial>
            </Decal>
    );
  };

  return (
    <group {...props} dispose={null}>
      <group name='default' visible={poseState === 'default'}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.default_jersey_geo.geometry}
          material={nodes.default_jersey_geo.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.default_shorts_geo.geometry}
          material={nodes.default_shorts_geo.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.default_socks_geo.geometry}
          material={nodes.default_socks_geo.material}
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
        />
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
        />
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
          ref = {jerseyRef}
        />
        <NumberDecal/>
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
useTexture.preload(`./assets/${asset_name}/base-design-1.png`)
useTexture.preload(`./assets/${asset_name}/base-design-2.png`)
useTexture.preload(`./assets/${asset_name}/motif-merlion.png`)
useTexture.preload(`./assets/${asset_name}/motif-stars.png`)
useTexture.preload(`./assets/${asset_name}/motif-singlish.png`)
useTexture.preload(`./assets/${asset_name}/motif-peranakan.png`)