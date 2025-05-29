import { useRef, useEffect, useState } from 'react' 
import { useFrame, useLoader } from '@react-three/fiber'
import { Text, PerspectiveCamera, useGLTF, useTexture, Decal, RenderTexture } from '@react-three/drei'
import * as THREE from 'three'
import useVariant from './stores/useVariant.jsx'
import LayeredMaterial from './components/LayeredMaterial.jsx'

import { 
  ColorSwatches
} from './data/colors.ts';

const asset_name = 'prpJersey'

export function Jersey(props) {
  const { nodes, materials } = useGLTF(`./assets/${asset_name}/model.glb`)

  const bodyColorState = useVariant((state) => state.bodyColor);
  const headstockColorState = useVariant((state) => state.headstockColor);
  const arcadeButtonColorState = useVariant((state) => state.arcadeButtonColor);
  const neckButtonColorState = useVariant((state) => state.neckButtonColor);
  const neckColorState = useVariant((state) => state.neckColor);
  const inlayColorState = useVariant((state) => state.inlayColor);
  const fretBoardColorState = useVariant((state) => state.fretBoardColor);
  const fretBoardBindingColorState = useVariant((state) => state.fretBoardBindingColor);
  const pickGuardColorState = useVariant((state) => state.pickGuardColor);
  const hardwareColorState = useVariant((state) => state.hardwareColor);
  const strummerSideColorState = useVariant((state) => state.strummerSideColor);
  const poseState = useVariant((state) => state.pose);
  const textureState = useVariant((state) => state.texture);
  const jerseyNameState = useVariant((state) => state.jerseyName);
  const jerseyNumberState = useVariant((state) => state.jerseyNumber);

  const jerseyRef = useRef()


  // Color library
  const bodyColor = ColorSwatches.find((color) => color.name === bodyColorState);


  // Define textures
  const t_color = useLoader(THREE.TextureLoader, `./assets/${asset_name}/color.png`);
  const t_normal = useLoader(THREE.TextureLoader, `./assets/${asset_name}/normal.png`);
  const texture = useLoader(THREE.TextureLoader, `./assets/prpJersey/${textureState}.png`);
  t_normal.flipY = false;
  t_color.flipY = false;
  t_normal.repeat = new THREE.Vector2(1, 1);
  t_normal.wrapS = THREE.RepeatWrapping;
  t_normal.wrapT = THREE.RepeatWrapping;

  // Define material library
  const m_jersyMat = new THREE.MeshStandardMaterial({map: t_color, roughness: 0.7, normalMap: t_normal, normalScale: new THREE.Vector2(0.3, 0.3)})
  const m_grey = new THREE.MeshStandardMaterial({color: 0x555555, roughness: 0.7, metalness: 0.2})
  const m_body = new THREE.MeshStandardMaterial({color: 0x333333, roughness: 0.2, metalness: 1})
  const m_jerseyLayered = LayeredMaterial({texture})



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
              <meshStandardMaterial polygonOffset polygonOffsetFactor={-1} transparent>
                <RenderTexture attach="map">
                  <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 10]} rotation={[0,0,0]} />
                  <Text position={[0,4,0]} fontSize={1} color="red">
                    {jerseyNameState}
                  </Text>
                  <Text fontSize={6} color="red">
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