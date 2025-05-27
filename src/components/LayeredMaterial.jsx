import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { useMemo } from 'react';

const LayeredMaterial = ({ texture }) => {
    const normalMap = useLoader(TextureLoader, '/assets/prpJersey/normal.png');
    normalMap.flipY = false; // Ensure the normal map is flipped correctly
    texture.flipY = false; // Ensure the texture is flipped correctly
    
    // Use useMemo to avoid recreating material on every render
    const material = useMemo(() => {
        const mat = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            map: texture, // Set the texture as the base map - this ensures UV setup
            roughness: 0.5,
            metalness: 0.0,
            normalMap: normalMap,
            normalScale: new THREE.Vector2(0.5, 0.5),
        });
        
        // Apply shader modifications
        mat.onBeforeCompile = (shader) => {
            // Add uniform for our custom texture
            shader.uniforms.customTexture = { value: texture };
            
            // Add uniform declaration to fragment shader
            shader.fragmentShader = `
                uniform sampler2D customTexture;
            ` + shader.fragmentShader;
            
            // Replace after the map fragment to override the texture
            shader.fragmentShader = shader.fragmentShader.replace(
                '#include <map_fragment>',
                `
                #include <map_fragment>
                
                // Use custom texture as alpha map to blend two colors
                #ifdef USE_MAP
                    vec4 customTexColor = texture2D(customTexture, vMapUv);
                    
                    // Define the two colors to blend
                    vec3 color1 = vec3(1.0, 0.0, 0.0); // Red #FF0000
                    vec3 color2 = vec3(1.0, 1.0, 1.0); // White #FFFFFF
                    
                    // Use the texture's grayscale value as alpha for blending
                    float alpha = (customTexColor.r + customTexColor.g + customTexColor.b) / 3.0;
                    
                    // Blend the two colors based on the alpha
                    vec3 blendedColor = mix(color1, color2, alpha);
                    
                    // Apply the blended color
                    diffuseColor.rgb = blendedColor;
                #endif
                `
            );
        };
        
        return mat;
    }, [texture]);
    
    return material;
};


export default LayeredMaterial;