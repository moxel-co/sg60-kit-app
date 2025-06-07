import { FontType } from '../types';

import {
  FontBaseballIcon,
  FontBebasNeueIcon,
  FontCollegeIcon,
} from './icons';

export const FontVariants: FontType[] = [
  { id: 'font_bebasneue', type: 'font', name: 'BebasNeue', path: '/assets/font/BebasNeue-Regular.ttf', icon: FontBebasNeueIcon },
  { id: 'font_baseball', type: 'font', name: 'Baseball Club', path: '/assets/font/BaseballClubSolid-E4X69.ttf', icon: FontBaseballIcon },
  { id: 'font_college', type: 'font', name: 'College', path: '/assets/font/AtlantaCollegeRegular-1Gva2.ttf', icon: FontCollegeIcon },
];