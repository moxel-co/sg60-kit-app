import { useRef, useEffect, useState } from 'react' 
import { useFrame } from '@react-three/fiber'
import { Text, OrbitControls, useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import useVariant from './stores/useVariant.jsx'
import createFresnelMaterial from './components/TranslucentMaterial.jsx'
import { useControls } from 'leva'

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

  const body = useVariant((state) => state.body);
  const headstock = useVariant((state) => state.headstock);
  const headstock2 = useVariant((state) => state.headstock2);
  const inlay = useVariant((state) => state.inlay);
  const inlay2 = useVariant((state) => state.inlay2);
  const starPowerButton = useVariant((state) => state.starPowerButton);
  const texture = useVariant((state) => state.texture);
  console.log(texture)
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
  const t_color = useTexture(`./assets/${asset_name}/${texture}.png`);
  const t_normal = useTexture(`./assets/${asset_name}/normal.png`);
  t_normal.flipY = false;
  t_color.flipY = false;
  t_normal.repeat = new THREE.Vector2(1, 1);
  t_normal.wrapS = THREE.RepeatWrapping;
  t_normal.wrapT = THREE.RepeatWrapping;

  // Define material library
  const m_jersyMat = new THREE.MeshStandardMaterial({map: t_color, roughness: 0.7, normalMap: t_normal, normalScale: new THREE.Vector2(0.3, 0.3)})

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.jersey_geo.geometry}
        material={m_jersyMat}
        position={[0, -2.5, 0]}
      />
    </group>
  )
}

useGLTF.preload(`./assets/${asset_name}/model.glb`)