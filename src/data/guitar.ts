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
} from '../data/icons';
import { GuitarVariant } from '../types';

export const guitarVariants: GuitarVariant[] = [
    // Body Variants
    {
        id: 'body_design1',
        name: 'Design 1',
        type: 'body',
        texture: 'design-1',
        offsetPos: [0,0],
        icon: BodyViperIcon,
    },
    {
        id: 'body_arrow',
        name: 'Design 2',
        type: 'body',
        texture: 'design-2',
        offsetPos: [0,0],   
        icon: BodyArrowIcon,
    },
    {
        id: 'body_aviator',
        name: 'Design 3',
        type: 'body',
        texture: 'design-3',
        shadowOffset: 0,
        offsetPos: [-0.0,0],
        icon: BodyAviatorIcon,
    },

    // Headstock Variants
    {
        id: 'headstock_viper',
        name: 'Merlion',
        type: 'headstock',
        icon: HeadStockViperIcon,
    },
    {
        id: 'headstock_arrow',
        name: 'Foodie',
        type: 'headstock',
        icon: HeadStockArrowIcon,
    },
    {
        id: 'headstock_aviator',
        name: 'Landscape',
        type: 'headstock',
        icon: HeadStockAviatorIcon,
    },
    {
        id: 'headstock_briefcase',
        name: 'Orchid',
        type: 'headstock',
        icon: HeadStockBriefcaseIcon,
    },


    // Inlay Variants
    {
        id: 'inlay_bird',
        name: 'Merlion scale',
        type: 'inlay',
        icon: InlayBirdIcon,
    },
    {
        id: 'inlay_block',
        name: 'Stars',
        type: 'inlay',
        icon: InlayBlockIcon,
    },
    {
        id: 'inlay_classicDot',
        name: 'Singlish',
        type: 'inlay',
        icon: InlayClassicdotIcon,
    },
    {
        id: 'inlay_cloud',
        name: 'Peranakan',
        type: 'inlay',
        icon: InlayCloudIcon,
    },
];