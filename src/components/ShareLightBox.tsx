import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Facebook, Instagram, Copy } from 'lucide-react'; // Import social media icons
import useVariant from '../stores/useVariant'; // Import useVariant

const ShareLightBox: React.FC = () => {
  const isShareLightBoxOpen = useVariant((state) => state.isShareLightBoxOpen); // Get global state
  const setIsShareLightBoxOpen = useVariant((state) => state.setIsShareLightBoxOpen); // Setter for global state

  // Get states for dynamic link
  const jerseyName = useVariant((state) => state.jerseyName);
  const jerseyNumber = useVariant((state) => state.jerseyNumber);
  const color = useVariant((state) => state.color);
  const motif = useVariant((state) => state.motif);
  const font = useVariant((state) => state.font);
  const texture = useVariant((state) => state.texture);

  const [animationClass, setAnimationClass] = useState('opacity-0 scale-95');

  const closeLightbox = () => setIsShareLightBoxOpen(false); // Update global state to close the lightbox

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleEsc);

    if (isShareLightBoxOpen) {
      setTimeout(() => {
        setAnimationClass('opacity-100 scale-100');
      }, 10);
    } else {
      setAnimationClass('opacity-0 scale-95');
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isShareLightBoxOpen]);

  const handleCopyLink = () => {
    const baseUrl = window.location.origin;
    const dynamicLink = `${baseUrl}/?name=${jerseyName}&number=${jerseyNumber}&color=${color}&motif=${motif}&font=${font}&texture=${texture}&showcase=true`;
    navigator.clipboard.writeText(dynamicLink);
    alert('Link copied to clipboard!');
  };

  return (
    <>
      {isShareLightBoxOpen && (
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
              Share your creation!.
            </h3>

            {/* Screenshot of the React app */}
            <div className="mb-6 flex justify-center">
              <img
                src="/assets/screenshot.png" // Replace with the actual path to your screenshot
                alt="App Screenshot"
                className="rounded-lg shadow-md max-w-full"
              />
            </div>

            <div className="flex flex-wrap gap-3 justify-center mt-6">
              <button
                onClick={handleCopyLink}
                className="flex items-center justify-center w-12 h-12 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"
                aria-label="Copy link"
              >
                <Copy size={20} />
              </button>
              <a
                href={`${window.location.origin}/?jerseyName=${jerseyName}&jerseyNumber=${jerseyNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"
                aria-label="Share on Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"
                aria-label="Share on Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"
                aria-label="Share on TikTok"
              >
                <img src="/assets/tiktok.svg" alt="TikTok" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShareLightBox;