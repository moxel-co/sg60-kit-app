import React from 'react';
import {
  Palette,
  Shirt,
  Joystick,
} from 'lucide-react';
import {
  BodyReliableIcon,
  HeadStockReliableIcon,
  InlaySharkfinIcon,
  FretboardIcon,
  FretboardBindingIcon,
  HardwareIcon,
  NeckIcon,
  NeckButtonsIcon,
  PickGuardIcon,
  StrummerSideIcon,
} from './icons.tsx';
import { MenuItem } from '../types';
import { 
  BodyColorSwatches,
  NeckColorSwatches,
  HeadstockColorSwatches,
  PickGuardColorSwatches,
  InlayColorSwatches,
  HardwareColorSwatches,
  NeckButtonColorSwatches,
  ArcadeButtonColorSwatches,
  FretboardColorSwatches,
  NeckBindingColorSwatches,
  StrummerSideColorSwatches
} from './colors';
import useVariant from '../stores/useVariant';
import { jerseyVariants } from './jersey.ts';
import { jerseyPresets } from './presets.ts';
import { ReactNode, useMemo } from 'react';


// Get current selected variants
const baseVariants = jerseyVariants.filter((variant) => variant.type === 'base');
const graphicsVariants = jerseyVariants.filter((variant) => variant.type === 'graphics');
const motifVariants = jerseyVariants.filter((variant) => variant.type === 'motif');
const jerseyPresetVariants = jerseyPresets.filter((variant) => variant.type === 'preset');


// Dynamic icons for menu items based on selected variant
const HeadstockIcon = () => {
  const headstock = useVariant((state) => state.headstock);
  const variant = jerseyVariants.find(v => v.id === `${headstock}`);
  const IconComponent = variant?.icon || HeadStockReliableIcon;
  return <IconComponent size={56} color={"white"} />;
};

const BodyIcon = () => {
  const body = useVariant((state) => state.body);
  const variant = jerseyVariants.find(v => v.id === `${body}`);
  const IconComponent = variant?.icon || BodyReliableIcon;
  return <IconComponent size={56} color={"white"} />;
};

const InlayIcon = () => {
  const inlay = useVariant((state) => state.inlay);
  const variant = jerseyVariants.find(v => v.id === `${inlay}`);
  const IconComponent = variant?.icon || InlaySharkfinIcon;
  return <IconComponent size={56} color={"white"} />;
};

const updateDynamicCamera = (targetType: string) => {
  useVariant.setState({ 
    targetType: targetType,
  });
};

const BodyColorIcon = () => {
  const body = useVariant((state) => state.body);
  const variant = jerseyVariants.find(v => v.id === `${body}`);
  const IconComponent = variant?.icon || BodyReliableIcon;
  return <IconComponent size={56} color={"white"} />;
};

const NeckColorIcon = () => {
  return <NeckIcon size={56} color={"white"} />;
};

const HeadstockColorIcon = () => {
  const headstock = useVariant((state) => state.headstock);
  const variant = jerseyVariants.find(v => v.id === `${headstock}`);
  const IconComponent = variant?.icon || InlaySharkfinIcon;
  return <IconComponent size={56} color={"white"} />;
}

const FretboardColorIcon = () => {
  return <FretboardIcon size={56} color={"white"} />;
};

const NeckBindingColorIcon = () => {
  return <FretboardBindingIcon size={56} color={"white"} />;
};

const InlayColorIcon = () => {
  const inlay = useVariant((state) => state.inlay);
  const variant = jerseyVariants.find(v => v.id === `${inlay}`);
  const IconComponent = variant?.icon || InlaySharkfinIcon;
  return <IconComponent size={56} color={"white"} />;
};

const NeckButtonColorIcon = () => {
  const neckButtonColorState = useVariant((state) => state.neckButtonColor);
  const neckButtonColor = NeckButtonColorSwatches.find((color) => color.name === neckButtonColorState);
  return <NeckButtonsIcon size={56} color={"white"} />;
};

const ArcadeButtonsColorIcon = () => {
  return <Joystick size={56} color={"white"} />;
};

const PickGuardColorIcon = () => {
  return <PickGuardIcon size={56} color={"white"} />;
};

const HardwareColorIcon = () => {
  return <HardwareIcon size={56} color={"white"} />;
};

const StrummerSideColorIcon = () => {
  return <StrummerSideIcon size={56} color={"white"} />;
};

// Create a custom hook that returns the customiseMenuItems array
export const useCustomiseMenuItems = (): MenuItem[] => {
  const preset = useVariant((state) => state.preset);
  const base = useVariant((state) => state.base);
  const graphics = useVariant((state) => state.graphics);
  const motif = useVariant((state) => state.motif);

  return useMemo(() => [
    {
      icon: <Shirt size={56} />,
      label: 'Presets',
      items: jerseyPresetVariants.map((variant) => ({
        icon: <variant.icon size={56} color="white" />,
        label: variant.name,
        onClick: () => {
          useVariant.setState({
            preset: variant.id,
            base: variant.body,
            graphics: variant.headstock,
            motif: variant.inlay,
            shadowOffset: variant.shadowOffset,
            offsetPos: variant.offsetPos,
          });
          updateDynamicCamera("default");
        },
        isActive: base === variant.id,
      })),
    },
    {
      icon: <BodyIcon /> as ReactNode,
      label: 'Base Design',
      items: baseVariants.map((variant) => ({
        icon: <variant.icon size={56} color="white" />,
        label: variant.name,
        onClick: () => {
          useVariant.setState({
            base: variant.id,
            texture: variant.texture,
            shadowOffset: variant.shadowOffset,
            offsetPos: variant.offsetPos,
          });
          updateDynamicCamera(variant.type);
        },
        isActive: base === variant.id,
      })),
    },
    {
      icon: <HeadstockIcon /> as ReactNode,
      label: 'Graphics',
      items: graphicsVariants.map((variant) => ({
        icon: <variant.icon size={56} color="white" />,
        label: variant.name,
        onClick: () => {
          useVariant.setState({ graphics: variant.id });
          updateDynamicCamera(variant.type);
        },
        isActive: graphics === variant.id,
      })),
    },
    {
      icon: <InlayIcon /> as ReactNode,
      label: 'Motif',
      items: motifVariants.map((variant) => ({
        icon: <variant.icon size={56} color="white" />,
        label: variant.name,
        onClick: () => {
          useVariant.setState({ motif: variant.id });
          updateDynamicCamera(variant.type);
        },
        isActive: motif === variant.id,
      })),
    },
    {
      icon: <Palette size={56} />,
      label: 'Colors',
      items: [
        {
          icon: <BodyColorIcon />,
          label: 'Body',
          isColorPicker: true,
          swatches: BodyColorSwatches,
          onColorSelect: (color: string) => handleColorSelect('Body', color),
        },
        {
          icon: <NeckColorIcon />,
          label: 'Neck',
          isColorPicker: true,
          swatches: NeckColorSwatches,
          onColorSelect: (color: string) => handleColorSelect('Neck', color),
        },
        {
          icon: <HeadstockColorIcon />,
          label: 'Headstock',
          isColorPicker: true,
          swatches: HeadstockColorSwatches,
          onColorSelect: (color: string) => handleColorSelect('Headstock', color),
        },
        {
          icon: <FretboardColorIcon />,
          label: 'Fretboard',
          isColorPicker: true,
          swatches: FretboardColorSwatches,
          onColorSelect: (color: string) => handleColorSelect('Fretboard', color),
        },
        {
          icon: <NeckBindingColorIcon />,
          label: 'Neck Binding',
          isColorPicker: true,
          swatches: NeckBindingColorSwatches,
          onColorSelect: (color: string) => handleColorSelect('Neck Binding', color),
        },
        {
          icon: <InlayColorIcon />,
          label: 'Inlay',
          isColorPicker: true,
          swatches: InlayColorSwatches,
          onColorSelect: (color: string) => handleColorSelect('Inlay', color),
        },
        {
          icon: <NeckButtonColorIcon />,
          label: 'Neck Buttons',
          isColorPicker: true,
          swatches: NeckButtonColorSwatches,
          onColorSelect: (color: string) => handleColorSelect('Neck Buttons', color),
        },
        {
          icon: <ArcadeButtonsColorIcon />,
          label: 'Arcade Buttons',
          isColorPicker: true,
          swatches: ArcadeButtonColorSwatches,
          onColorSelect: (color: string) => handleColorSelect('Arcade Buttons', color),
        },
        {
          icon: <PickGuardColorIcon />,
          label: 'Pick Guard',
          isColorPicker: true,
          swatches: PickGuardColorSwatches,
          onColorSelect: (color: string) => handleColorSelect('Pick Guard', color),
        },
        {
          icon: <HardwareColorIcon />,
          label: 'Hardware',
          isColorPicker: true,
          swatches: HardwareColorSwatches,
          onColorSelect: (color: string) => handleColorSelect('Hardware', color),
        },
        {
          icon: <StrummerSideColorIcon />,
          label: 'Strummer Side Panels',
          isColorPicker: true,
          swatches: StrummerSideColorSwatches,
          onColorSelect: (color: string) => handleColorSelect('Strummer Side Panels', color),
        },
      ],
    },
  ], [preset, base, graphics, motif]);
};