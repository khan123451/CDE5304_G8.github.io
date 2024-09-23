'use client';

import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export const ModelViewer: React.FC = () => {
    return (
        <Canvas style={{ height: '500px', width: '100%' }}>
            <RacingCarModel />
        </Canvas>
    );
};

export const RacingCarModel: React.FC = () => {
    const myModel = useLoader(GLTFLoader, '/Racing-car.glb');
    const modelRef = useRef<Mesh>(null);

    useFrame((_state, delta) => {
        if (modelRef.current) {
            modelRef.current.rotation.y += delta / 20;
        }
    });

    return (
        <>
            <pointLight position={[-10, -10, -10]} color="#FFFFFF" intensity={5000} />
            <pointLight position={[10, 10, 10]} color="#FFFFFF" intensity={5000} />
            <primitive object={myModel.scene} ref={modelRef} />
        </>
    );
};