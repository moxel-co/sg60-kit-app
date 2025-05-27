import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

// const LayeredMaterial = () => {
//     // Load the texture
//     const texture = useLoader(TextureLoader, './assets/prpJersey/color.png');
    
//     const material = new THREE.MeshStandardMaterial({});
    
//     material.onBeforeCompile = (shader) => {
//         // Add uniform for our texture
//         // shader.uniforms.customTexture = { value: texture };
        
//         // Add uniform declaration to fragment shader
//         // shader.fragmentShader = `
//         //     uniform sampler2D customTexture;
//         // ` + shader.fragmentShader;
        
//         shader.fragmentShader = shader.fragmentShader.replace(
//             '#include <color_fragment>',
//             `
//             #include <color_fragment>
            

//             `
//         );
//     };
    
//     return material;
// };

const LayeredMaterial = new THREE.MeshStandardMaterial({});

LayeredMaterial.onBeforeCompile = (shader) => {
    const texture = useLoader(TextureLoader, './assets/prpJersey/color.png');

    shader.uniforms.customTexture = { value: texture };

    shader.fragmentShader = `
            uniform sampler2D customTexture;
        ` + shader.fragmentShader;

    shader.fragmentShader = shader.fragmentShader.replace(
        '#include <color_fragment>',
        `
        #include <color_fragment>
        
        // Set constant red color
        // vec4 texColor = texture2D(customTexture, vMapUv);
        diffuseColor.rgb = vec3(1.0, 0.0, 0.0);
        `
    );
};

export default LayeredMaterial;



