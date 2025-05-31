import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { useMemo } from 'react';

function hexToVec3(hex) {
    const color = new THREE.Color(hex);
    return [color.r, color.g, color.b];
}

const LayeredMaterial = ({
    base_texture,
    motif_texture,
    primary_color = '#ff0000',
    secondary_color = '#ffffff'
}) => {
    const normalMap = useLoader(TextureLoader, '/assets/prpJersey/normal.png');
    const normalMapScale = 0.5;
    normalMap.flipY = false;
    base_texture.flipY = false;
    motif_texture.flipY = false;
    motif_texture.wrapS = THREE.RepeatWrapping;
    motif_texture.wrapT = THREE.RepeatWrapping;

    const primaryVec3 = hexToVec3(primary_color);
    const secondaryVec3 = hexToVec3(secondary_color);

    const material = useMemo(() => {
        const mat = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            map: base_texture,
            roughness: 0.5,
            metalness: 0.0,
            normalMap: normalMap,
            normalScale: new THREE.Vector2(normalMapScale, normalMapScale),
        });

        mat.onBeforeCompile = (shader) => {
            shader.uniforms.baseTexture = { value: base_texture };
            shader.uniforms.motifTexture = { value: motif_texture };
            shader.uniforms.primary_color = { value: new THREE.Color(...primaryVec3) };
            shader.uniforms.secondary_color = { value: new THREE.Color(...secondaryVec3) };

            shader.fragmentShader = `
                uniform sampler2D baseTexture;
                uniform sampler2D motifTexture;
                uniform vec3 primary_color;
                uniform vec3 secondary_color;
            ` + shader.fragmentShader;

            shader.fragmentShader = shader.fragmentShader.replace(
                '#include <map_fragment>',
                `
                #include <map_fragment>
                #ifdef USE_MAP
                    vec4 baseTexColor = texture2D(baseTexture, vMapUv);
                    vec4 motifTexColor = texture2D(motifTexture, vMapUv * 40.0);
                    float alpha = (step(0.5, (1.0 - baseTexColor.r))) * step(0.5,motifTexColor.r);
                    vec3 blendedColor = mix(primary_color, secondary_color, (1.0 - alpha)*1.0);
                    diffuseColor.rgb = blendedColor;
                #endif
                `
            );
        };

        return mat;
    }, [base_texture, primary_color, secondary_color, primaryVec3, secondaryVec3]);

    return material;
};

export default LayeredMaterial;