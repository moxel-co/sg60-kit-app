import React, { useEffect } from 'react';
import { Environment } from "@react-three/drei";
import useVariant from "../stores/useVariant";
import { Lightrig } from "../data/lightrig.ts";

export function Lighting() {
  const lightrigState = useVariant((state) => state.lightrig);
  const showcaseCamState = useVariant((state) => state.isShowcaseViewEnabled);
  const lightrig = Lightrig.find((lightrig) => lightrig.id === lightrigState);

  useEffect(() => {
    if (showcaseCamState) {
      useVariant.setState({
        lightrig: "lightrig_stadium",
      });
    } else {
      useVariant.setState({
        lightrig: "lightrig_studio",
      });
    }
  }, [showcaseCamState]); // Added dependency array to re-run effect when showcaseCamState changes

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


