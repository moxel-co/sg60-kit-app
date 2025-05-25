import React, { useState } from 'react';
import useVariant from '../stores/useVariant';
import { ShoppingCart, PackagePlus } from 'lucide-react';
import { guitarVariants } from '../data/guitar';

const AddToCartButton = () => {
    const [isHovered, setIsHovered] = useState(false);
    const body = useVariant((state) => state.body);
    const inlay = useVariant((state) => state.inlay);
    const headstock = useVariant((state) => state.headstock);
    const headstock2 = useVariant((state) => state.headstock2);
    const isDualNeck = useVariant((state) => state.isDualNeck);

    const setIsOrderLightBoxOpen = useVariant((state) => state.setIsOrderLightBoxOpen);

    const standardBodyId = "dea56f68-9339-46ab-b48b-c28c25ce6819";
    const dualNeckBodyId = "b17cbbe6-07eb-c879-4e9c-ad0f3481affe";

    const productId = isDualNeck ? dualNeckBodyId : standardBodyId;

    const body_name = guitarVariants.find((variant) => variant.id === body)?.name || "Undefined Body";
    const headstock_name = guitarVariants.find((variant) => variant.id === headstock)?.name || "Undefined Head Stock";
    const headstock2_name = guitarVariants.find((variant) => variant.id === headstock2)?.name || "Undefined Head Stock";
    const inlay_name = guitarVariants.find((variant) => variant.id === inlay)?.name || "Undefined Inlay";

    const handleAddToCart = () => {
        // Trigger Google Analytics event
        if (typeof gtag === 'function') {
            gtag('event', 'click', {
                event_category: 'engagement',
                event_label: 'Cart Clicked',
            });
        }

        // Open the order lightbox
        setIsOrderLightBoxOpen(true);
    };

    return (
        <button
            onClick={handleAddToCart}
            className="menu-button cart-button"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="cart-button-icon">
                {isHovered ? <PackagePlus size={56} /> : <ShoppingCart size={56} />}
            </div>
        </button>
    );
};

export default AddToCartButton;