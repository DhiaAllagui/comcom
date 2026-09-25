import React, { Suspense } from 'react';
import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient';

// Animated WebGL gradient used as the hero background, replacing the mp4.
// Colors are tuned to the brand accent (#E31A94) so it reads as an extension
// of the existing dark/magenta identity rather than a new visual language.
export default function HeroShaderGradient({ reduceMotion }) {
  return (
    <ShaderGradientCanvas
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      pixelDensity={1}
      fov={40}
    >
      <Suspense fallback={null}>
        <ShaderGradient
          control="props"
          type="waterPlane"
          animate={reduceMotion ? 'off' : 'on'}
          uTime={0}
          uSpeed={0.15}
          uStrength={3.2}
          uDensity={1.3}
          uFrequency={5.5}
          uAmplitude={1}
          positionX={0}
          positionY={0}
          positionZ={0}
          rotationX={0}
          rotationY={0}
          rotationZ={50}
          color1="#06070A"
          color2="#660B42"
          color3="#E31A94"
          reflection={0.1}
          wireframe={false}
          cAzimuthAngle={180}
          cPolarAngle={90}
          cDistance={3.6}
          cameraZoom={1}
          lightType="env"
          brightness={1}
          envPreset="city"
          grain="on"
          grainBlending={0.25}
          toggleAxis={false}
          zoomOut={false}
        />
      </Suspense>
    </ShaderGradientCanvas>
  );
}
