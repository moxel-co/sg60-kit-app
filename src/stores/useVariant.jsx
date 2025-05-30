import { create } from 'zustand';

export default create((set, get) => ({
    // Guitar state
    preset: 'preset_merlion',
    base: 'base_design_1',
    texture: 'base-design-1',
    motif: 'motif_merlion',
    jerseyName: 'SG',
    jerseyNumber: '60',
    shadowOffset: 0,
    offsetPos: [0, 0],
    pose: 'poseC',

    // Settings state
    isRotationEnabled: false,
    isDynamicViewEnabled: true,
    isPostEffectsEnabled: false,
    isShowcaseViewEnabled: false,

    // Camera state
    resetCamera: 0,
    cameraPosition: [0, 8, 10],
    targetType: 'default',
    targetCameraPosition: [0, 8, 10],
    cameraTarget: [0, 8, 0],
    targetCameraTarget: [0, 8, 0],

    // UI
    isUiHidden: false,
    setIsUiHidden: (isHidden) => set({ isUiHidden: isHidden }),

    // Light Boxes
    isOrderLightBoxOpen: false,
    setIsOrderLightBoxOpen: (isOpen) => set({ isOrderLightBoxOpen: isOpen }),
    isNameNumberLightBoxOpen: false,
    setIsNameNumberLightBoxOpen: (isOpen) => set({ isNameNumberLightBoxOpen: isOpen }),
    setJerseyName: (name) => set({ jerseyName: name }),
    setJerseyNumber: (number) => set({ jerseyNumber: number }),
}));