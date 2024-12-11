import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import Question from '../Question';

export default function WebDesign() {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Question />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
