'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Suspense } from 'react';

function Planet() {
  return (
    <mesh rotation={[0.4, 0.2, 0]}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial color="#da8cff" roughness={0.5} metalness={0.3} />
    </mesh>
  );
}

export default function ThreePlanet() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 2, 1]} />
        <Suspense fallback={null}>
          <Stars radius={100} depth={50} count={5000} factor={4} fade />
          <Planet />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} />
        </Suspense>
      </Canvas>
    </div>
  );
}
