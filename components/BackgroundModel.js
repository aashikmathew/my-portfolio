import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

function RotatingModel() {
  // Load the GLTF model
  const { scene } = useGLTF('/models/computer/scene.gltf');
  // Create a ref to the scene for rotation
  const sceneRef = useRef(scene);

  // Animate on every frame
  useFrame((state, delta) => {
    // Rotate around the Y-axis
    // This rotates a small amount each frame, leading to a slow continuous rotation.
    // Increase or decrease '0.2' for faster/slower rotation
    sceneRef.current.rotation.y += 0.2 * delta;
  });

  return <primitive ref={sceneRef} object={scene} position={[0, -1, 0]} scale={[0.8, 0.8, 0.8]} />;
}

export default function BackgroundModel() {
  return (
    <Canvas
      style={{
        position: 'absolute',
        top: '0%',
        right: '0px',
        width: '1000px',
        height: '800px',
        pointerEvents: 'none',
        zIndex: 1,
        
      }}
      camera={{ position: [0, 0, 0], fov: 60 }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[0, 5, 5]} intensity={0.5} />

      {/* Use our RotatingModel component */}
      <RotatingModel />
    </Canvas>
  );
}
