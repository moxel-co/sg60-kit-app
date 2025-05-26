import React, { useEffect, useState } from 'react';
import { X, Copy, ExternalLink, Check } from 'lucide-react';
import useVariant from '../stores/useVariant'; // Import useVariant

const OrderLightBox: React.FC = () => {
  const isOrderLightBoxOpen = useVariant((state) => state.isOrderLightBoxOpen); // Get global state
  const setIsOrderLightBoxOpen = useVariant((state) => state.setIsOrderLightBoxOpen); // Setter for global state
  const [copied, setCopied] = useState(false);
  const [animationClass, setAnimationClass] = useState('opacity-0 scale-95');


  const orderPageUrl = "https://www.moxel.co"; // Default value for orderPageUrl

  const closeLightbox = () => setIsOrderLightBoxOpen(false); // Update global state to close the lightbox

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleEsc);

    if (isOrderLightBoxOpen) {
      setTimeout(() => {
        setAnimationClass('opacity-100 scale-100');
      }, 10);
    } else {
      setAnimationClass('opacity-0 scale-95');
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOrderLightBoxOpen]);

  const handleCopy = () => {
    
  };

  return (
    <>
      {isOrderLightBoxOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeLightbox}
          />

          <div
            className={`relative rounded-lg shadow-xl max-w-md w-full mx-4 p-6 transition-all duration-300 ${animationClass}`}
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }} // Set white background with 20% opacity
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close"
            >
              <X size={20} className="text-gray-500" />
            </button>

            <h3 className="text-base text-white mb-4 pr-8 text-center">
            Please click the "Copy" button below and paste the text to your order, linked through the "Order page" button.
            </h3>

            <div
              className="mt-4 p-3 bg-gray-50 border border-gray-200 rounded-md text-gray-800 text-sm mb-4"
              style={{ whiteSpace: 'pre-wrap' }} // Ensure line breaks are rendered
            >
              {}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <button
                onClick={handleCopy}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 text-white rounded-md hover:opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50"
                style={{
                  backgroundColor: 'orange', // Set the button background color
                  focusRingColor: '#0c3d64', // Optional: Set focus ring color
                }}
              >
                {copied ? (
                  <>
                    <Check size={18} />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={18} />
                    <span>Copy</span>
                  </>
                )}
              </button>

              <a
                href={orderPageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"
                onClick={() => {
                  if (typeof gtag === 'function') {
                    gtag('event', 'click', {
                      event_category: 'engagement',
                      event_label: 'Order page Clicked',
                    });
                  }
                }}
              >
                <ExternalLink size={18} />
                <span>Order page</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderLightBox;