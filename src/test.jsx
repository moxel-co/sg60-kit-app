/*--------------------
Author: Fabio Ottaviani
https://linktr.ee/supahfunk
--------------------*/

import { useEffect, useMemo, useRef } from 'react'
import {
  CanvasTexture,
  LinearMipMapLinearFilter,
  NearestFilter,
  DoubleSide
} from 'three'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
// import moment from 'moment'
// import './styles.css'
import {
    useGLTF,
    useCursor,
    useTexture,
    Text,
    Decal,
    Environment,
    RenderTexture,
    RandomizedLight,
    PerspectiveCamera,
    AccumulativeShadows
  } from '@react-three/drei'

class CanvasCountdown {
  constructor(obj) {
    Object.assign(this, obj)
    if (!document.getElementById('canvas-countdown')) {
      this.canvas = document.createElement('canvas')
      this.canvas.id = 'canvas-countdown'
      document.body.appendChild(this.canvas)
    } else {
      this.canvas = document.getElementById('canvas-countdown')
    }
    this.size = 1024
    this.canvas.width = this.canvas.height = this.size
    this.ctx = this.canvas.getContext('2d')
    this.ctx.textAlign = 'center'
    this.ctx.fillStyle = 'red'
    this.text = 'COUNTDOWN'
    this.update()
  }

  update() {
    this.ctx.fillStyle = 'black'
    this.ctx.fillRect(0, 0, this.size, this.size)

    this.ctx.fillStyle = 'white'
    // Upper text
    this.ctx.font = '60px Roboto'
    this.ctx.fillText(this.text, this.size / 2, this.size / 2 - 100)

    // Lower text
    this.ctx.font = '200px Roboto'
    this.ctx.fillText(this.countdown, this.size / 2, this.size / 2 + 100)
  }
}

const decimalNumber = (num) => (num.toString().length <= 1 ? `0${num}` : num)

const Countdown = (props) => {
  const material = useRef();
  const interval = useRef();
  const canvasCountdown = useMemo(() => {
    return new CanvasCountdown({ countdown: 10 });
  }, []);
  const texture = useMemo(() => {
    return new CanvasTexture(canvasCountdown.canvas);
  }, [canvasCountdown]);
  const { gl } = useThree();

  // Hardcoded target date (replace with your desired date/time)
  const targetDate = new Date('2022-02-01T18:30:20.000Z');

  useEffect(() => {
    texture.anisotropy = gl.capabilities.getMaxAnisotropy();
    texture.minFilter = LinearMipMapLinearFilter;
    texture.magFilter = NearestFilter;
    material.current.alphaMap = texture;

    interval.current = setInterval(() => {
      const now = new Date();
      let diff = Math.max(0, targetDate - now);

      const d = decimalNumber(Math.floor(diff / (1000 * 60 * 60 * 24)));
      const h = decimalNumber(Math.floor((diff / (1000 * 60 * 60)) % 24));
      const m = decimalNumber(Math.floor((diff / (1000 * 60)) % 60));
      const s = decimalNumber(Math.floor((diff / 1000) % 60));

      canvasCountdown.countdown = `${d}:${h}:${m}:${s}`;
      canvasCountdown.update();

      texture.needsUpdate = true;

      if (diff <= 0) {
        clearInterval(interval.current);
      }
    }, 100);

    return () => clearInterval(interval.current);
  }, []);
  const { nodes } = useGLTF('/assets/prpJersey/model.glb')
//<mesh castShadow receiveShadow geometry={nodes.poseC_jersey_geo.geometry} {...props} dispose={null}>
  return (
    <mesh position={[0,-8,0]} castShadow receiveShadow geometry={nodes.poseC_jersey_geo.geometry} {...props} dispose={null}>
      <meshBasicMaterial
        ref={material}
        side={DoubleSide}
        color={0x000000}
        transparent={true}
      />
    </mesh>
  );
};

export default function App() {
  return (
    <>
      <Canvas camera={{ position: [0, -0.2, 1] }}>
        <color attach="background" args={[0xeeeeee]} />
        <OrbitControls />
        <Countdown date="2022-02-01T18:30:20.000Z" />
      </Canvas>
    </>
  );
}
