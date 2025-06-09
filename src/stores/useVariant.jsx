import { create } from 'zustand';

export default create((set, get) => ({
    // Guitar state
    preset: 'preset_merlion',
    base: 'base_stripes',
    motif: 'motif_merlion',
    font: 'font_arsenal',
    jerseyName: 'SG',
    jerseyNumber: '60',
    color: 'color_mixed',
    shadowOffset: 0,
    offsetPos: [0, 0],
    pose: 'default',

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
    isUiHidden: true,
    setIsUiHidden: (isHidden) => set({ isUiHidden: isHidden }),

    // Light Boxes
    isOrderLightBoxOpen: false,
    setIsOrderLightBoxOpen: (isOpen) => set({ isOrderLightBoxOpen: isOpen }),
    isShareLightBoxOpen: false,
    setIsShareLightBoxOpen: (isOpen) => set({ isShareLightBoxOpen: isOpen }),
    isNameNumberLightBoxOpen: false,
    setIsNameNumberLightBoxOpen: (isOpen) => set({ isNameNumberLightBoxOpen: isOpen }),
    setJerseyName: (name) => set({ jerseyName: name }),
    setJerseyNumber: (number) => set({ jerseyNumber: number }),
}));