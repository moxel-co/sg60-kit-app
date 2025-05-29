import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  useGLTF,
  useCursor,
  useTexture,
  Text,
  Decal,
  Environment,
  OrbitControls,
  RenderTexture,
  RandomizedLight,
  PerspectiveCamera,
  AccumulativeShadows
} from '@react-three/drei'

export const App = () => (
  <Canvas>
    <group position={[0, -0.75, 0]}>
      <Bun position={[0, 0, 0]} />
    </group>
    <OrbitControls makeDefault />
  </Canvas>
)

function Bun(props) {
  const { nodes } = useGLTF('/assets/test.glb')
  return (
    <mesh geometry={nodes.jersey.geometry} {...props} dispose={null}>
      <meshBasicMaterial color="yellow" />
      <Decal position={[0, 7.5, -1]} rotation={[Math.PI, Math.PI, Math.PI*0.99]} scale={[1.5, 1.5, 1.5]} debug>
        <meshStandardMaterial polygonOffset polygonOffsetFactor={-1} transparent>
          <RenderTexture attach="map">
            <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 10]} rotation={[0,0,0]} />
            <Text rotation={[0, Math.PI, 0]} fontSize={2} color="red">
              MARCUS
            </Text>
            <Text rotation={[0, Math.PI, 0]} fontSize={8} color="red">
              24
            </Text>
          </RenderTexture>
        </meshStandardMaterial>
      </Decal>
    </mesh>
  )
}
