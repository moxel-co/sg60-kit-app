import React from 'react';
import '../styles/font.css';

interface IconProps {
  size: number;
  color?: string;
}

export const BaseWavyIcon = ({ size, color = 'currentColor' }: IconProps) => (
  <div
    style={{
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMask: `url("/icons/base-wavy.png") center/contain no-repeat`,
      mask: `url("/icons/base-wavy.png") center/contain no-repeat`,
    }}
  />
);

export const BaseStripesIcon = ({ size, color = 'currentColor' }: IconProps) => (
  <div
    style={{
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMask: `url("/icons/base-stripes.png") center/contain no-repeat`,
      mask: `url("/icons/base-stripes.png") center/contain no-repeat`,
    }}
  />
);

export const BaseClassicIcon = ({ size, color = 'currentColor' }: IconProps) => (
  <div
    style={{
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMask: `url("/icons/base-classic.png") center/contain no-repeat`,
      mask: `url("/icons/base-classic.png") center/contain no-repeat`,
    }}
  />
);


export const FontArsenalIcon = ({ size, color = 'currentColor' }: IconProps) => (
  <div
    style={{
      width: size,
      height: size,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'ArsenalUEFA1516',
      fontSize: size * 0.8,
      color: color,
    }}
  >
    A
  </div>
);

export const FontBrazilIcon = ({ size, color = 'currentColor' }: IconProps) => (
  <div
    style={{
      width: size,
      height: size,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Brazil2018',
      fontSize: size * 0.8,
      color: color,
    }}
  >
    A
  </div>
);

export const FontMexcellentIcon = ({ size, color = 'currentColor' }: IconProps) => (
  <div
    style={{
      width: size,
      height: size,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Mexcellent',
      fontSize: size * 0.8,
      color: color,
    }}
  >
    A
  </div>
);

export const FontNigeriaIcon = ({ size, color = 'currentColor' }: IconProps) => (
  <div
    style={{
      width: size,
      height: size,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Nigeria2018',
      fontSize: size * 0.8,
      color: color,
    }}
  >
    A
  </div>
);

export const FontPremierLeagueIcon = ({ size, color = 'currentColor' }: IconProps) => (
  <div
    style={{
      width: size,
      height: size,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'PremierLeagueFont2018',
      fontSize: size * 0.8,
      color: color,
    }}
  >
    A
  </div>
);

export const FontRealMadrid15Icon = ({ size, color = 'currentColor' }: IconProps) => (
  <div
    style={{
      width: size,
      height: size,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'ReadMadrid1516',
      fontSize: size * 0.8,
      color: color,
    }}
  >
    A
  </div>
);

export const FontRealMadrid16Icon = ({ size, color = 'currentColor' }: IconProps) => (
  <div
    style={{
      width: size,
      height: size,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'RealMadrid1617',
      fontSize: size * 0.8,
      color: color,
    }}
  >
    A
  </div>
);

export const FontSoccerJerseyIcon = ({ size, color = 'currentColor' }: IconProps) => (
  <div
    style={{
      width: size,
      height: size,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'SoccerJersey',
      fontSize: size * 0.8,
      color: color,
    }}
  >
    A
  </div>
);

export const InlayBirdIcon = ({ size, color = 'currentColor' }: IconProps) => (
  <div
    style={{
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMask: `url("/icons/inlay-bird.png") center/contain no-repeat`,
      mask: `url("/icons/inlay-bird.png") center/contain no-repeat`,
    }}
  />
);

export const InlayBlockIcon = ({ size, color = 'currentColor' }: IconProps) => (
  <div
    style={{
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMask: `url("/icons/inlay-block.png") center/contain no-repeat`,
      mask: `url("/icons/inlay-block.png") center/contain no-repeat`,
    }}
  />
);

export const InlayCloudIcon = ({ size, color = 'currentColor' }: IconProps) => (
  <div
    style={{
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMask: `url("/icons/inlay-cloud.png") center/contain no-repeat`,
      mask: `url("/icons/inlay-cloud.png") center/contain no-repeat`,
    }}
  />
);

export const InlayDeathbatIcon = ({ size, color = 'currentColor' }: IconProps) => (
  <div
    style={{
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMask: `url("/icons/inlay-deathbat.png") center/contain no-repeat`,
      mask: `url("/icons/inlay-deathbat.png") center/contain no-repeat`,
    }}
  />
);

export const InlayClassicdotIcon = ({ size, color = 'currentColor' }: IconProps) => (
  <div
    style={{
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMask: `url("/icons/inlay-classicDot.png") center/contain no-repeat`,
      mask: `url("/icons/inlay-classicDot.png") center/contain no-repeat`,
    }}
  />
);

export const InlayLightningIcon = ({ size, color = 'currentColor' }: IconProps) => (
  <div
    style={{
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMask: `url("/icons/inlay-lightning.png") center/contain no-repeat`,
      mask: `url("/icons/inlay-lightning.png") center/contain no-repeat`,
    }}
  />
);

export const InlayOffsetdotIcon = ({ size, color = 'currentColor' }: IconProps) => (
  <div
    style={{
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMask: `url("/icons/inlay-offsetDot.png") center/contain no-repeat`,
      mask: `url("/icons/inlay-offsetDot.png") center/contain no-repeat`,
    }}
  />
);

export const InlayParallelogramIcon = ({ size, color = 'currentColor' }: IconProps) => (
  <div
    style={{
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMask: `url("/icons/inlay-parallelogram.png") center/contain no-repeat`,
      mask: `url("/icons/inlay-parallelogram.png") center/contain no-repeat`,
    }}
  />
);

export const InlayOffsetSwappedIcon = ({ size, color = 'currentColor' }: IconProps) => (
  <div
    style={{
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMask: `url("/icons/inlay-offsetSwapped.png") center/contain no-repeat`,
      mask: `url("/icons/inlay-offsetSwapped.png") center/contain no-repeat`,
    }}
  />
);

export const InlayRazorIcon = ({ size, color = 'currentColor' }: IconProps) => (
  <div
    style={{
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMask: `url("/icons/inlay-razor.png") center/contain no-repeat`,
      mask: `url("/icons/inlay-razor.png") center/contain no-repeat`,
    }}
  />
);

export const InlaySawbladeIcon = ({ size, color = 'currentColor' }: IconProps) => (
  <div
    style={{
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMask: `url("/icons/inlay-sawblade.png") center/contain no-repeat`,
      mask: `url("/icons/inlay-sawblade.png") center/contain no-repeat`,
    }}
  />
);

export const InlaySharkfinIcon = ({ size, color = 'currentColor' }: IconProps) => (
  <div
    style={{
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMask: `url("/icons/inlay-sharkfin.png") center/contain no-repeat`,
      mask: `url("/icons/inlay-sharkfin.png") center/contain no-repeat`,
    }}
  />
);

export const InlaySnakeIcon = ({ size, color = 'currentColor' }: IconProps) => (
  <div
    style={{
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMask: `url("/icons/inlay-snake.png") center/contain no-repeat`,
      mask: `url("/icons/inlay-snake.png") center/contain no-repeat`,
    }}
  />
);

export const InlayTrapezoidIcon = ({ size, color = 'currentColor' }: IconProps) => (
  <div
    style={{
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMask: `url("/icons/inlay-trapezoid.png") center/contain no-repeat`,
      mask: `url("/icons/inlay-trapezoid.png") center/contain no-repeat`,
    }}
  />
);

export const InlayTreeIcon = ({ size, color = 'currentColor' }: IconProps) => (
  <div
    style={{
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMask: `url("/icons/inlay-tree.png") center/contain no-repeat`,
      mask: `url("/icons/inlay-tree.png") center/contain no-repeat`,
    }}
  />
);

export const FretboardIcon = ({ size, color = 'currentColor' }: IconProps) => (
  <div
    style={{
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMask: `url("/icons/fretboard.png") center/contain no-repeat`,
      mask: `url("/icons/fretboard.png") center/contain no-repeat`,
    }}
  />
);

export const FretboardBindingIcon = ({ size, color = 'currentColor' }: IconProps) => (
  <div
    style={{
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMask: `url("/icons/fretboardBinding.png") center/contain no-repeat`,
      mask: `url("/icons/fretboardBinding.png") center/contain no-repeat`,
    }}
  />
);

export const HardwareIcon = ({ size, color = 'currentColor' }: IconProps) => (
  <div
    style={{
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMask: `url("/icons/hardware.png") center/contain no-repeat`,
      mask: `url("/icons/hardware.png") center/contain no-repeat`,
    }}
  />
);

export const NeckIcon = ({ size, color = 'currentColor' }: IconProps) => (
  <div
    style={{
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMask: `url("/icons/neck.png") center/contain no-repeat`,
      mask: `url("/icons/neck.png") center/contain no-repeat`,
    }}
  />
);

export const NeckButtonsIcon = ({ size, color = 'currentColor' }: IconProps) => (
  <div
    style={{
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMask: `url("/icons/neckButtons.png") center/contain no-repeat`,
      mask: `url("/icons/neckButtons.png") center/contain no-repeat`,
    }}
  />
);

export const PickGuardIcon = ({ size, color = 'currentColor' }: IconProps) => (
  <div
    style={{
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMask: `url("/icons/pickGuard.png") center/contain no-repeat`,
      mask: `url("/icons/pickGuard.png") center/contain no-repeat`,
    }}
  />
);

export const StrummerSideIcon = ({ size, color = 'currentColor' }: IconProps) => (
  <div
    style={{
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMask: `url("/icons/strummerSide.png") center/contain no-repeat`,
      mask: `url("/icons/strummerSide.png") center/contain no-repeat`,
    }}
  />
);

export const HandRightIcon = ({ size, color = 'currentColor' }: IconProps) => (
  <div
    style={{
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMask: `url("/icons/handRight.png") center/contain no-repeat`,
      mask: `url("/icons/handRight.png") center/contain no-repeat`,
    }}
  />
);

export const HandLeftIcon = ({ size, color = 'currentColor' }: IconProps) => (
  <div
    style={{
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMask: `url("/icons/handLeft.png") center/contain no-repeat`,
      mask: `url("/icons/handLeft.png") center/contain no-repeat`,
    }}
  />
);