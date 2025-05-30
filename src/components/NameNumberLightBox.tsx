import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import useVariant from '../stores/useVariant';

const NameNumberLightBox: React.FC = () => {
  const isNameNumberLightBoxOpen = useVariant((state) => state.isNameNumberLightBoxOpen);
  const setIsNameNumberLightBoxOpen = useVariant((state) => state.setIsNameNumberLightBoxOpen);
  const jerseyName = useVariant((state) => state.jerseyName);
  const jerseyNumber = useVariant((state) => state.jerseyNumber);
  const setJerseyName = useVariant((state) => state.setJerseyName);
  const setJerseyNumber = useVariant((state) => state.setJerseyNumber);
  const [animationClass, setAnimationClass] = useState('opacity-0 scale-95');
  const [tempName, setTempName] = useState(jerseyName);
  const [tempNumber, setTempNumber] = useState(jerseyNumber);

  const closeLightbox = (save: boolean = false) => {
    if (save) {
      setJerseyName(tempName);
      setJerseyNumber(tempNumber);
    }
    setIsNameNumberLightBoxOpen(false);
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeLightbox(false);
    };
    window.addEventListener('keydown', handleEsc);

    if (isNameNumberLightBoxOpen) {
      setTempName(jerseyName);
      setTempNumber(jerseyNumber);
      setTimeout(() => {
        setAnimationClass('opacity-100 scale-100');
      }, 10);
    } else {
      setAnimationClass('opacity-0 scale-95');
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isNameNumberLightBoxOpen, jerseyName, jerseyNumber]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.slice(0, 12).toUpperCase();
    setTempName(value);
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 2);
    setTempNumber(value);
  };

  return (
    <>
      {isNameNumberLightBoxOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => closeLightbox(false)}
          />

          <div
            className={`relative bg-black bg-opacity-80 rounded-lg shadow-xl max-w-md w-full mx-4 p-6 transition-all duration-300 ${animationClass}`}
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
          >
            <button
              onClick={() => closeLightbox(false)}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-800 transition-colors"
              aria-label="Close"
            >
              <X size={20} className="text-gray-300" />
            </button>

            <h3 className="text-xl font-semibold text-white mb-4">
              Customize Jersey Text
            </h3>

            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={tempName}
                  onChange={handleNameChange}
                  maxLength={12}
                  className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter name"
                />
              </div>

              <div>
                <label htmlFor="number" className="block text-sm font-medium text-gray-300">
                  Number
                </label>
                <input
                  type="text"
                  id="number"
                  value={tempNumber}
                  onChange={handleNumberChange}
                  className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter number (0-99)"
                />
              </div>

              <div className="mt-6 flex gap-4">
                <button
                  onClick={() => closeLightbox(false)}
                  className="flex-1 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={() => closeLightbox(true)}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NameNumberLightBox;