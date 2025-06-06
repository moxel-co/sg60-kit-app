import {
    BaseWavyIcon,
    BaseStripesIcon,
    HeadStockBriefcaseIcon,
    HeadStockViperIcon,
    BodyViperIcon,
    BodyArrowIcon,
    BodyAviatorIcon,
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
        id: 'base_design3',
        name: 'Stars',
        type: 'base',
        texture: 'design-3',
        shadowOffset: 0,
        offsetPos: [-0.0,0],
        icon: BodyAviatorIcon,
    },

    // Headstock Variants
    {
        id: 'graphics_merlion',
        name: 'Merlion',
        type: 'graphics',
        icon: HeadStockViperIcon,
    },
    {
        id: 'graphics_foodie',
        name: 'Foodie',
        type: 'graphics',
        icon: BaseWavyIcon,
    },
    {
        id: 'graphics_landmarks',
        name: 'Landmarks',
        type: 'graphics',
        icon: BaseWavyIcon,
    },
    {
        id: 'graphics_orchid',
        name: 'Orchid',
        type: 'graphics',
        icon: HeadStockBriefcaseIcon,
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