import { LightRig } from '../types';

export const Lightrig: LightRig[] = [
  {
    id: 'lightrig_studio',
    type: 'lightrig',
    name: 'Studio',
    texture: '/assets/common/latlong/studio_small_03_graded_1k.exr',
    height: 15,
    radius: 40,
    scale: 50,
    background: false,
  },
  {
    id: 'lightrig_stadium',
    type: 'lightrig',
    name: 'Stadium',
    texture: '/assets/common/latlong/stadium_1k.exr',
    height: 10,
    radius: 100,
    scale: 200,
    background: true,
  },
];