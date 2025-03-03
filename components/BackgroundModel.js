import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

function RotatingModel() {
  // Load the GLTF model with relative path
  const { scene } = useGLTF('./models/scene.gltf');
  
  // Define the angle range in radians
  const minAngle = -Math.PI / 6; // -30 degrees
  const maxAngle = Math.PI / 6;  // 30 degrees
  
  // Use state to track rotation direction
  const [rotateRight, setRotateRight] = useState(true);
  
  // Create a ref to the scene for rotation
  const sceneRef = useRef(scene);
  
  // Initialize the rotation
  useEffect(() => {
    if (sceneRef.current) {
      sceneRef.current.rotation.y = minAngle;
    }
  }, []);

  // Animate on every frame with controlled rotation
  useFrame((state, delta) => {
    if (sceneRef.current) {
      // Slower rotation speed - adjust the 0.05 value to make it slower/faster
      const rotationSpeed = 0.05 * delta;
      
      if (rotateRight) {
        sceneRef.current.rotation.y += rotationSpeed;
        
        // If we reach the max angle, change direction
        if (sceneRef.current.rotation.y >= maxAngle) {
          sceneRef.current.rotation.y = maxAngle;
          setRotateRight(false);
        }
      } else {
        sceneRef.current.rotation.y -= rotationSpeed;
        
        // If we reach the min angle, change direction
        if (sceneRef.current.rotation.y <= minAngle) {
          sceneRef.current.rotation.y = minAngle;
          setRotateRight(true);
        }
      }
    }
  });

  return <primitive ref={sceneRef} object={scene} position={[0, -1, 0]} scale={[0.8, 0.8, 0.8]} />;
}

export default function BackgroundModel() {
  const [isClient, setIsClient] = useState(false);

  // Only render the Canvas on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Return nothing during server-side rendering
  }

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