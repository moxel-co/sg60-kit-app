import React from "react";
import {
  Environment,
  ContactShadows,
} from "@react-three/drei";
import {
  ToneMapping,
  EffectComposer,
  Bloom,
  ChromaticAberration,
} from "@react-three/postprocessing";
import { ToneMappingMode } from "postprocessing";
import { BlendFunction } from "postprocessing";
import { Jersey } from "./Jersey.jsx";
import useVariant from "./stores/useVariant.jsx";
import { DynamicCamera } from "./components/DynamicCamera.jsx";
import ShowcaseCamera from "./components/ShowcaseCamera.jsx";
import { Effects } from "./components/Effects.tsx";


export default function App() {

  const isPostEffectsEnabled = useVariant((state) => state.isPostEffectsEnabled);
  const isShowcaseViewEnabled = useVariant((state) => state.isShowcaseViewEnabled);
  const shadowOffset = useVariant((state) => state.shadowOffset);

  return (
    <>
      <DynamicCamera />
      <Environment
        files={'./assets/common/latlong/studio_small_03_graded_1k.exr'}
        background={true}
        ground={{
          height: 15, // Height of the camera that was used to create the env map (Default: 15)
          radius: 40, // Radius of the world. (Default 60)
          scale: 50, // Scale of the backside projected sphere that holds the env texture (Default: 1000)
        }}
        />
        {/* <Environment
        files={'./assets/common/latlong/stadium_1k.exr'}
        background={true}
        ground={{
          height: 10, // Height of the camera that was used to create the env map (Default: 15)
          radius: 100, // Radius of the world. (Default 60)
          scale: 200, // Scale of the backside projected sphere that holds the env texture (Default: 1000)
        }}
        /> */}
      <ContactShadows position={[0, shadowOffset, 0]} opacity={0.3} />
      <Jersey />
      {isShowcaseViewEnabled && <ShowcaseCamera />}
    </>
  );
}
