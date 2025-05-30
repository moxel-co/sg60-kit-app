import {
    HeadStockArrowIcon,
    HeadStockAviatorIcon,
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
        id: 'base_design1',
        name: 'Base Design 1',
        type: 'base',
        texture: 'base-design-1',
        offsetPos: [0,0],
        icon: BodyViperIcon,
    },
    {
        id: 'base_design2',
        name: 'Base Design 2',
        type: 'base',
        texture: 'base-design-2',
        offsetPos: [0,0],   
        icon: BodyArrowIcon,
    },
    {
        id: 'base_design3',
        name: 'Base Design 3',
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
        icon: HeadStockArrowIcon,
    },
    {
        id: 'graphics_landmarks',
        name: 'Landmarks',
        type: 'graphics',
        icon: HeadStockAviatorIcon,
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