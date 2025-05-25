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
      {/* <Effects /> */}
      <EffectComposer>
        
        <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
        {isPostEffectsEnabled && <Bloom intensity={0.2} luminanceThreshold={0.2} />}
        {isPostEffectsEnabled && 
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL}
          offset={[0.0005, 0.0005]}
        />}
      </EffectComposer>
      {/* <EffectComposer>
        <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
      </EffectComposer> */}

      <DynamicCamera />
      <Environment
        files={("./assets/common/latlong/jersey_1k.hdr")}
        environmentRotation={[0, Math.PI * 5 , 0]}
        backgroundRotation={[0, Math.PI * 5 , 0]}
        intensity={0.5}
      />
      <ContactShadows position={[0, shadowOffset, 0]} opacity={0.3} />
      <Jersey />
      {isShowcaseViewEnabled && <ShowcaseCamera />}
    </>
  );
}
