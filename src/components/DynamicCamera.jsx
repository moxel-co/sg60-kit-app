import React, { useRef, useEffect } from "react";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { gsap } from "gsap";
import useVariant from "../stores/useVariant";

export function DynamicCamera() {
  const targetType = useVariant((state) => state.targetType);
  const cameraPosition = useVariant((state) => state.cameraPosition);
  const cameraTarget = useVariant((state) => state.cameraTarget);
  const isRotationEnabled = useVariant((state) => state.isRotationEnabled);
  const isDynamicViewEnabled = useVariant((state) => state.isDynamicViewEnabled);
  const isShowcaseViewEnabled = useVariant((state) => state.isShowcaseViewEnabled);
  const resetCamera = useVariant((state) => state.resetCamera);

  const cameraRef = useRef();
  const controlsRef = useRef();

  // Define presets for camera positions and targets
  const cameraPresets = {
    default: {
      position: [0, 8, 10],
      target: [0, 8, 0],
    },
    headstock: {
      position: [0, 8, 3],
      target: [0, 8, 0],
    },
    body: {
      position: [0, 8, 6],
      target: [0, 8, 0],
    },
    inlay: {
      position: [0, 8, 3],
      target: [0, 8, 0],
    },
    fretboard: {
      position: [0, 8, 5],
      target: [0, 8, 0],
    },
    neck: {
      position: [0, 8, 5],
      target: [0, 8, 0],
    },
    neckButtons: {
      position: [0, 8, 2],
      target: [0, 8, 0],
    },
  };


  // Animate camera position and target only when targetType changes and isDynamicViewEnabled is true
  useEffect(() => {
    if (!isDynamicViewEnabled || isShowcaseViewEnabled) return; // Skip animation if dynamic view is disabled

    const preset = cameraPresets[targetType] || cameraPresets.default;

    // Animate camera position
    gsap.to(cameraRef.current.position, {
      x: preset.position[0],
      y: preset.position[1],
      z: preset.position[2],
      duration: 1, // Animation duration
      ease: "power1.out", // Easing function
      onUpdate: () => {
        useVariant.setState({
          cameraPosition: [
            cameraRef.current.position.x,
            cameraRef.current.position.y,
            cameraRef.current.position.z,
          ],
        });
      },
    });

    // Animate camera target
    gsap.to(controlsRef.current.target, {
      x: preset.target[0],
      y: preset.target[1],
      z: preset.target[2],
      duration: 1, // Animation duration
      ease: "power1.out", // Easing function
      onUpdate: () => {
        useVariant.setState({
          cameraTarget: [
            controlsRef.current.target.x,
            controlsRef.current.target.y,
            controlsRef.current.target.z,
          ],
        });
        controlsRef.current.update(); // Update controls during animation
      },
    });
  }, [targetType, isDynamicViewEnabled]);

  useEffect(() => {
    if (isShowcaseViewEnabled) return; // Skip animation if dynamic view is disabled

    const preset = cameraPresets.default;

    // Animate camera position
    gsap.to(cameraRef.current.position, {
      x: preset.position[0],
      y: preset.position[1],
      z: preset.position[2],
      duration: 1, // Animation duration
      ease: "power1.out", // Easing function
      onUpdate: () => {
        useVariant.setState({
          cameraPosition: [
            cameraRef.current.position.x,
            cameraRef.current.position.y,
            cameraRef.current.position.z,
          ],
        });
      },
    });

    // Animate camera target
    gsap.to(controlsRef.current.target, {
      x: preset.target[0],
      y: preset.target[1],
      z: preset.target[2],
      duration: 1, // Animation duration
      ease: "power1.out", // Easing function
      onUpdate: () => {
        useVariant.setState({
          cameraTarget: [
            controlsRef.current.target.x,
            controlsRef.current.target.y,
            controlsRef.current.target.z,
          ],
        });
        controlsRef.current.update(); // Update controls during animation
      },
    });
  }, [resetCamera]);

  return (
    <>
      <PerspectiveCamera ref={cameraRef} makeDefault position={cameraPosition} />
      <OrbitControls
        ref={controlsRef}
        enableDamping
        minDistance={2.2}
        maxDistance={25}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 1.2}
        target={cameraTarget}
        autoRotate={isRotationEnabled}
        autoRotateSpeed={0.4}
      />
    </>
  );
}