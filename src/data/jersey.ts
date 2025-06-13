import {
    BaseWavyIcon,
    BaseStripesIcon,
    BaseClassicIcon,
    InlayBlockIcon,
    InlayBirdIcon,
    InlayClassicdotIcon,
    InlayCloudIcon,
} from './icons';
import { JerseyVariant } from '../types';

export const jerseyVariants: JerseyVariant[] = [
    // Body Variants
    {
        id: 'base_wavy',
        name: 'Wavy',
        type: 'base',
        texture: 'tex_base_wavy',
        offsetPos: [0,0],
        icon: BaseWavyIcon,
    },
    {
        id: 'base_stripes',
        name: 'Stripes',
        type: 'base',
        texture: 'tex_base_stripes',
        offsetPos: [0,0],   
        icon: BaseStripesIcon,
    },
    {
        id: 'base_classic',
        name: 'Classic',
        type: 'base',
        texture: 'tex_base_classic',
        shadowOffset: 0,
        offsetPos: [-0.0,0],
        icon: BaseClassicIcon,
    },

    // Headstock Variants
    {
        id: 'graphics_merlion',
        name: 'Merlion',
        type: 'graphics',
        texture: 'tex_graphics_merlion',
        icon: BaseWavyIcon,
    },
    {
        id: 'graphics_skyline',
        name: 'Skyline',
        type: 'graphics',
        texture: 'tex_graphics_skyline',
        icon: BaseWavyIcon,
    },
    {
        id: 'graphics_orchid',
        name: 'Orchid',
        type: 'graphics',
        texture: 'tex_graphics_orchid',
        icon: BaseWavyIcon,
    },


    // Inlay Variants
    {
        id: 'motif_merlion',
        name: 'Merlion scale',
        type: 'motif',
        texture: 'motif-merlion',
        icon: InlayBirdIcon,
    },
    {
        id: 'motif_stars',
        name: 'Stars',
        type: 'motif',
        texture: 'motif-stars',
        icon: InlayBlockIcon,
    },
    {
        id: 'motif_singlish',
        name: 'Singlish',
        type: 'motif',
        texture: 'motif-singlish',
        icon: InlayClassicdotIcon,
    },
    {
        id: 'motif_peranakan',
        name: 'Peranakan',
        type: 'motif',
        texture: 'motif-peranakan',
        icon: InlayCloudIcon,
    },
];