import { create } from 'zustand';

export default create((set, get) => ({
    // Guitar state
    preset: 'preset_arrow',
    body: 'body_arrow',
    headstock: 'headstock_arrow',
    headstock2: 'headstock_arrow',
    texture: 'design-1',
    inlay: 'inlay_sharkfin',
    inlay2: 'inlay_sharkfin',
    starPowerButton: true,
    bodyColor: 'White',
    neckColor: 'White',
    headstockColor: 'White',
    fretBoardColor: 'White',
    fretBoardBindingColor: 'White',
    pickGuardColor: 'White',
    hardwareColor: 'Silk Silver',
    inlayColor: 'Silk White',
    neckButtonColor: 'Rainbow',
    arcadeButtonColor: 'Black',
    strummerSideColor: 'Black',
    strummerOffset: 0,
    shadowOffset: 0,
    isDualNeck: false,
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

    // Light Boxes
    isOrderLightBoxOpen: false,
    setIsOrderLightBoxOpen: (isOpen) => set({ isOrderLightBoxOpen: isOpen }), // Add this setter
}));