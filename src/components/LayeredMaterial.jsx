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
    secondary_color = '#ffffff',
    tertiary_color= '#ffffff', 
    icon_color= '#ffffff',
}) => {
    const normalMap = useLoader(TextureLoader, '/assets/prpJersey/normal.png');
    const icon_texture = useLoader(TextureLoader, '/assets/prpJersey/sg60-logo.png');
    const normalMapScale = 0.2;
    normalMap.flipY = false;
    icon_texture.flipY = false;
    base_texture.flipY = false;
    motif_texture.flipY = false;
    motif_texture.wrapS = THREE.RepeatWrapping;
    motif_texture.wrapT = THREE.RepeatWrapping;

    const primaryVec3 = hexToVec3(primary_color);
    const secondaryVec3 = hexToVec3(secondary_color);
    const tertiaryVec3 = hexToVec3(tertiary_color);
    const iconVec3 = hexToVec3(icon_color);

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
            shader.uniforms.iconTexture = { value: icon_texture };
            shader.uniforms.primary_color = { value: new THREE.Color(...primaryVec3) };
            shader.uniforms.secondary_color = { value: new THREE.Color(...secondaryVec3) };
            shader.uniforms.tertiary_color = { value: new THREE.Color(...tertiaryVec3) };
            shader.uniforms.icon_color = { value: new THREE.Color(...iconVec3) };

            shader.fragmentShader = `
                uniform sampler2D baseTexture;
                uniform sampler2D motifTexture;
                uniform sampler2D iconTexture;
                uniform vec3 primary_color;
                uniform vec3 secondary_color;
                uniform vec3 tertiary_color;
                uniform vec3 icon_color;
            ` + shader.fragmentShader;

            shader.fragmentShader = shader.fragmentShader.replace(
                '#include <map_fragment>',
                `
                #include <map_fragment>
                #ifdef USE_MAP
                    vec4 baseTexColor = texture2D(baseTexture, vMapUv);
                    vec4 motifTexColor = texture2D(motifTexture, vMapUv * 40.0);
                    vec2 iconUv = vMapUv * 34.0;
                    iconUv.x += -12.0;
                    iconUv.y += -12.5;
                    vec4 iconTexture = texture2D(iconTexture, iconUv);
                    float alpha = (step(0.5, (1.0 - baseTexColor.r))) * step(0.5,motifTexColor.r);
                    vec3 blendedColor = mix(primary_color, secondary_color, (1.0 - alpha)*1.0);
                    vec3 blendedColor2 = mix(secondary_color, primary_color, baseTexColor.r);
                    vec3 blendedColor3 = mix(blendedColor2, tertiary_color, baseTexColor.b);
                    vec3 blendedIcon = mix(blendedColor3, icon_color, iconTexture.r);
                    diffuseColor.rgb = blendedIcon;
                #endif
                `
            );
        };

        return mat;
    }, [base_texture, primary_color, secondary_color, tertiary_color, primaryVec3, secondaryVec3, tertiaryVec3]); // Updated dependencies

    return material;
};

export default LayeredMaterial;