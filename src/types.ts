import { ReactNode } from 'react';

export interface ColorSwatch {
  primary_color: string;
  secondary_color?: string;
  tertiary_color?: string;
  icon_color?: string;
  name: string;
  type: string;
  id: string;
  metalness?: number;
  roughness?: number;
}

export interface FontType {
  id: string;
  name: string;
  type: string;
  path: string;
  icon: ReactNode;
}

export interface JerseyVariant {
  id: string;
  name: string;
  type: 'base' | 'graphics' | 'motif';
  icon: ReactNode;
  texture: string;
  shadowOffset: number;
  offsetPos: number[];
}

export interface JerseyPresets {
  id: string;
  name: string;
  type: 'preset';
  icon: ReactNode;
  body: string;
  headstock: string;
  headstock2?: string;
  inlay: string;
  inlay2?: string;
  bodyColor: string;
  neckColor: string;
  headstockColor: string;
  neckButtonColor?: string;
  pickguardColor?: string;
  fretboardColor?: string;
  arcadeButtonColor?: string;
  hardwareColor: string;
  isDualNeck: boolean;
  strummerOffset: number;
  shadowOffset: number;
  offsetPos: number[];
  neckOffsetPosLeft: number[];
  neckOffsetRotLeft: number[];
  dualNeckOffsetPos: number[];
  dualNeckOffsetRot: number[];
  dualNeckOffsetPosLeft: number[];
  dualNeckOffsetRotLeft: number[];
}

export interface MenuItem {
  icon: ReactNode;
  label: string;
  items?: MenuItem[];
  isColorPicker?: boolean;
  swatches?: ColorSwatch[];
  isDualColor?: boolean;
  subItems?: MenuItem[];
  isToggle?: boolean;
  onToggle?: () => void;
  active?: boolean;
  onClick?: () => void;
  onColorSelect?: (color: string) => void;
  id?: string;
  className?: string;
  labelClassName?: string;
}