import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import afterMovie from '../assets/afterMovie.mp4'
import bpText from '../assets/bp-text.png'
import {useAspect } from '@react-three/drei'
import { motion } from 'framer-motion';
import UnderlineText from './underlineText';


const useScrollPosition = () => {
    const [scrollY, setScrollY] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return scrollY;
  };

const RotatingTriangle = () => {
    const triangleRef = useRef();
    const planeRef = useRef();
    const [texture, setTexture] = useState(null);

    // Load the texture
    useEffect(() => {
        const loader = new THREE.TextureLoader();
        loader.load(bpText, (loadedTexture) => {
            loadedTexture.flipY = true;
            setTexture(loadedTexture);
        });
    }, []);

    // Animation logic
    useFrame(({ clock }) => {
        const elapsed = clock.getElapsedTime();
        const rotationSpeed = 0.2;

        const rotationAngle = Math.sin(elapsed * rotationSpeed) * (Math.PI / 6); 

        triangleRef.current.rotation.y = Math.PI + rotationAngle; 

        triangleRef.current.position.y = Math.sin(elapsed * 2) * 0.2;

        planeRef.current.rotation.y = triangleRef.current.rotation.y;
        planeRef.current.position.copy(triangleRef.current.position);
        planeRef.current.position.z = triangleRef.current.position.z + 0.05;
    });

    const shape = new THREE.Shape();
    shape.moveTo(0, 1);
    shape.lineTo(-1, -1);
    shape.lineTo(1, -1);
    shape.closePath();

    const geometry = new THREE.ExtrudeGeometry(shape, { depth: 0.5, bevelEnabled: false });


    const scale = useAspect(
        1024,                     // Pixel-width
        773,                      // Pixel-height
        0.1                        // Optional scaling factor
      )
    return (
        <>
            {/* Triangle Mesh */}
            <mesh ref={triangleRef} scale={[3, 3, 3]} rotation={[0, Math.PI, Math.PI]} >
                <primitive object={geometry} />
                <meshBasicMaterial color="#74f94d" side={THREE.DoubleSide} />
            </mesh>

            {/* Image Plane Mesh */}
            <mesh ref={planeRef} position={[3, 3, 3]} scale={scale}>
                <planeGeometry args={[2, 2]} />
                <meshBasicMaterial map={texture} side={THREE.DoubleSide} transparent={true} />
            </mesh>
        </>
    );
};


const Hero = () => {
    const scrollY = useScrollPosition();


    return (
        <div className="relative w-full h-screen ">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover opacity-10 shadow-glow"
        >
          <source src={afterMovie} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="relative z-10 text-white text-center p-8">

        <div className='mt-40 h-[400px] '>
        <Canvas camera={{ position: [0, 0, 12], fov: 45 }}
        gl={{ toneMapping: THREE.NoToneMapping }}


        >
        <RotatingTriangle  />
         </Canvas>
         <div className='leading-10 '>
         <h1 className='font-custom text-[55px]'>9-13 JULY 2025</h1>
         <h2 className='font-custom text-[37px]'>COSTINESTI, ROMANIA</h2>
         </div>
         <div className='mt-10 flex items-center justify-center '>
            <a href="https://bilete.beach-please.ro/" target="_blank" ><motion.button className=' h-14 w-40 rounded-3xl  font-bold text-[19px] flex items-center justify-center shadow-glow'
            initial={{scale: 1, color: "rgb(0,0,0)", backgroundColor: 'rgba(116, 249, 77, 1)'}}
            whileHover={{scale: 1.1, color: 'rgb(255,255,255)', backgroundColor: 'rgba(106, 229, 70, 1)' }}
            whileTap={{scale: 0.95}}
            >
                TICKETS
            </motion.button>
            </a>
         </div>
         </div>
         </div>
         </div>

    )
}

export default Hero;