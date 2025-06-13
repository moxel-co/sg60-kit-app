import React, { useRef, useEffect } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import useVariant from "../stores/useVariant";
import { Lightrig } from "../data/lightrig.ts";

export function Lighting() {
  const lightrigState = useVariant((state) => state.lightrig);
  const lightrig = Lightrig.find((lightrig) => lightrig.id === lightrigState);


  return (
    <>
      <Environment
              files={lightrig.texture}
              background={lightrig.background}
              ground={{
                height: lightrig.height,
                radius: lightrig.radius,
                scale: lightrig.scale,
              }}
        />
    </>
  );
}