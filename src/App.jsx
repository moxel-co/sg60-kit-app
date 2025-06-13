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
import { Lighting } from "./components/Lighting.jsx";
import ShowcaseCamera from "./components/ShowcaseCamera.jsx";
import { Effects } from "./components/Effects.tsx";
import { useEffect } from 'react';


export default function App() {

  const isPostEffectsEnabled = useVariant((state) => state.isPostEffectsEnabled);
  const isShowcaseViewEnabled = useVariant((state) => state.isShowcaseViewEnabled);
  const shadowOffset = useVariant((state) => state.shadowOffset);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const jerseyName = params.get("name");
    const jerseyNumber = params.get("number");
    const base = params.get("base");
    const motif = params.get("motif");
    const color = params.get("color");
    const graphics = params.get("graphics");
    const showcase = params.get("showcase");
    const font = params.get("font");

    if (jerseyName) useVariant.setState({ jerseyName });
    if (jerseyNumber) useVariant.setState({ jerseyNumber });
    if (base) useVariant.setState({ base });
    if (motif) useVariant.setState({ motif });
    if (color) useVariant.setState({ color });
    if (graphics) useVariant.setState({ graphics });
    if (font) useVariant.setState({ font });
    if (showcase !== null) {
      useVariant.setState({ isShowcaseViewEnabled: showcase === "true" });
    }
  }, []);

  return (
    <>
      <DynamicCamera />
      <Lighting />
      <ContactShadows position={[0, shadowOffset, 0]} opacity={0.3} />
      <Jersey />
      {isShowcaseViewEnabled && <ShowcaseCamera />}
    </>
  );
}
