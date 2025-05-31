import React, { useState } from 'react';
import useVariant from '../stores/useVariant';
import { Share2 } from 'lucide-react';

const ShareButton = () => {
    const [isHovered, setIsHovered] = useState(false);

    const setIsShareLightBoxOpen = useVariant((state) => state.setIsOrderLightBoxOpen);

    const handleShare = () => {
        if (typeof gtag === 'function') {
            gtag('event', 'click_share', {
                event_category: 'engagement',
                event_label: 'Share Clicked',
            });
        }

        setIsShareLightBoxOpen(true);
    };

    return (
        <button
            onClick={handleShare}
            className="menu-button share-button"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="share-button-icon">
                {isHovered ? <Share2 size={56} /> : <Share2 size={56} />}
            </div>
        </button>
    );
};

export default AddToCartButton;