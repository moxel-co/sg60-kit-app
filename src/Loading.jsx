import { useRef } from 'react' 
import { useFrame } from '@react-three/fiber'
import { Html, ContactShadows, OrbitControls, DeviceOrientationControls, useGLTF } from '@react-three/drei'
import { isMobile } from 'react-device-detect'
import React, { useState, useEffect, useTransition } from 'react';

// Icon paths to preload
const ICON_PATHS = [
    '/icons/base-wavy.png',
    '/icons/base-stripes.png',
];

export default function Loading({ onLoadingComplete }) {
    const [progress, setProgress] = useState(0);
    const [iconsLoaded, setIconsLoaded] = useState(false);
    const progressRef = useRef(0);
    const [isPending, startTransition] = useTransition();

    // Preload icons
    useEffect(() => {
        const preloadIcons = async () => {
            try {
                const promises = ICON_PATHS.map(path => {
                    return new Promise((resolve, reject) => {
                        const img = new Image();
                        img.onload = resolve;
                        img.onerror = reject;
                        img.src = path;
                    });
                });

                await Promise.all(promises);
                setIconsLoaded(true);
                console.log('All icons preloaded successfully');
            } catch (error) {
                console.error('Error preloading icons:', error);
                // Still mark as loaded to prevent blocking
                setIconsLoaded(true);
            }
        };

        preloadIcons();
    }, []);

    // Progress animation
    useEffect(() => {
        let rafId;
        const updateProgress = () => {
            // Slow down progress if icons aren't loaded yet
            const increment = iconsLoaded ? 2 : 0.5;
            progressRef.current += increment;
            
            // Don't complete until icons are loaded
            const maxProgress = iconsLoaded ? 100 : 85;
            
            if (progressRef.current <= maxProgress) {
                setProgress(Math.min(progressRef.current, maxProgress));
                rafId = requestAnimationFrame(updateProgress);
            } else if (iconsLoaded && progressRef.current >= 100) {
                setProgress(100);
                // Call completion callback after a short delay
                setTimeout(() => {
                    onLoadingComplete?.();
                }, 500);
            }
        };

        startTransition(() => {
            rafId = requestAnimationFrame(updateProgress);
        });

        return () => {
            if (rafId) {
                cancelAnimationFrame(rafId);
            }
        };
    }, [iconsLoaded, onLoadingComplete]);

    const safeProgress = Math.min(Math.max(progress, 0), 100);

    return (
        <Html center>
            <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#242424]">
                <div className="relative w-32 h-32">
                    <img
                        src="/sg60-jersey.svg"
                        alt="Loading"
                        className="w-full h-full"
                        style={{
                            filter: 'grayscale(100%)',
                            opacity: 0.5,
                        }}
                    />
                    <img
                        src="/sg60-jersey.svg"
                        alt="Loading"
                        className="absolute top-0 left-0 w-full h-full"
                        style={{
                            clipPath: `polygon(0 ${100 - safeProgress}%, 100% ${100 - safeProgress}%, 100% 100%, 0 100%)`,
                        }}
                    />
                </div>
                <div className="mt-4 text-white font-medium text-center">
                    <div>
                        {safeProgress < 85 ? 'Loading Assets...' : 
                         safeProgress < 100 ? 'Preparing Icons...' : 
                         'Ready!'}
                    </div>
                    <div>{Math.floor(safeProgress)}%</div>
                </div>
            </div>
        </Html>
    );
}