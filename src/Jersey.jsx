import { useRef, useEffect, useState } from 'react' 
import { useFrame, useLoader } from '@react-three/fiber'
import { Text, OrbitControls, useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import useVariant from './stores/useVariant.jsx'
import LayeredMaterial from './components/LayeredMaterial.jsx'

import { 
  BodyColorSwatches,
  NeckColorSwatches,
  HeadstockColorSwatches,
  PickGuardColorSwatches,
  InlayColorSwatches,
  HardwareColorSwatches,
  NeckButtonColorSwatches,
  ArcadeButtonColorSwatches,
  FretboardColorSwatches,
  NeckBindingColorSwatches,
  StrummerSideColorSwatches
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


  // Color library
  const bodyColor = BodyColorSwatches.find((color) => color.name === bodyColorState);
  const arcadeButtonColor = ArcadeButtonColorSwatches.find((color) => color.name === arcadeButtonColorState);
  const neckButtonColor = NeckButtonColorSwatches.find((color) => color.name === neckButtonColorState);
  const neckColor = NeckColorSwatches.find((color) => color.name === neckColorState);
  const headstockColor = HeadstockColorSwatches.find((color) => color.name === headstockColorState);
  const inlayColor = InlayColorSwatches.find((color) => color.name === inlayColorState);
  const fretBoardColor = FretboardColorSwatches.find((color) => color.name === fretBoardColorState);
  const fretBoardBindingColor = NeckBindingColorSwatches.find((color) => color.name === fretBoardBindingColorState);
  const pickGuardColor = PickGuardColorSwatches.find((color) => color.name === pickGuardColorState);
  const hardwareColor = HardwareColorSwatches.find((color) => color.name === hardwareColorState);
  const strummerSideColor = StrummerSideColorSwatches.find((color) => color.name === strummerSideColorState);


  // Define textures
  const t_color = useLoader(THREE.TextureLoader, `./assets/${asset_name}/color.png`);
  const t_normal = useLoader(THREE.TextureLoader, `./assets/${asset_name}/normal.png`);
  t_normal.flipY = false;
  t_color.flipY = false;
  t_normal.repeat = new THREE.Vector2(1, 1);
  t_normal.wrapS = THREE.RepeatWrapping;
  t_normal.wrapT = THREE.RepeatWrapping;

  // Define material library
  const m_jersyMat = new THREE.MeshStandardMaterial({map: t_color, roughness: 0.7, normalMap: t_normal, normalScale: new THREE.Vector2(0.3, 0.3)})
  const m_grey = new THREE.MeshStandardMaterial({color: 0x555555, roughness: 0.7, metalness: 0.2})
  const m_body = new THREE.MeshStandardMaterial({color: 0x333333, roughness: 0.2, metalness: 1})
  const m_jerseyLayered = LayeredMaterial



// Create a mapping between material names and material objects
  const materialMapping = {
    '_jersey_': m_jerseyLayered,
    '_shorts_': m_grey,
    '_socks_': m_grey,
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
        />
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