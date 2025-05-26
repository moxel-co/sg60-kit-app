import React, { useState } from 'react';
import useVariant from '../stores/useVariant';
import { ShoppingCart, PackagePlus } from 'lucide-react';
import { guitarVariants } from '../data/guitar';

const AddToCartButton = () => {
    const [isHovered, setIsHovered] = useState(false);

    const setIsOrderLightBoxOpen = useVariant((state) => state.setIsOrderLightBoxOpen);

    const handleAddToCart = () => {
        if (typeof gtag === 'function') {
            gtag('event', 'click', {
                event_category: 'engagement',
                event_label: 'Cart Clicked',
            });
        }

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