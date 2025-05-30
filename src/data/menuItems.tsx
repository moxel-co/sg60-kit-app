import React from 'react';
import {
  Palette,
  Shirt,
  Joystick,
  Type,
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
  ColorSwatches,
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
const colorVariants = ColorSwatches.filter((variant) => variant.type === 'color');

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

const handleColorSelect = (colorType: string, color: string) => {
  useVariant.setState({ bodyColor: color });
  useVariant.setState({ targetType: 'body' });
};

// Create a custom hook that returns the customiseMenuItems array
export const useCustomiseMenuItems = (): MenuItem[] => {
  const preset = useVariant((state) => state.preset);
  const base = useVariant((state) => state.base);
  const graphics = useVariant((state) => state.graphics);
  const motif = useVariant((state) => state.motif);
  const color = useVariant((state) => state.color);
  const setIsNameNumberLightBoxOpen = useVariant((state) => state.setIsNameNumberLightBoxOpen);

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
      icon: <Type size={56} />,
      label: 'Text',
      items: [
        {
          icon: <Type size={56} color="white" />,
          label: 'Name and Number',
          onClick: () => {
            setIsNameNumberLightBoxOpen(true);
          },
        },
      ],
    },
    {
      icon: <Palette size={56} />,
      label: 'Colors',
      items: colorVariants.map((variant) => ({
        icon: <Palette size={56} />,
        label: variant.name,
        onClick: () => {
          useVariant.setState({ color: variant.id });
        },
        isActive: color === variant.id,
      })),
    },
  ], [preset, base, graphics, motif, setIsNameNumberLightBoxOpen]);
};