/* eslint-disable react/no-unknown-property */
// @ts-nocheck
'use client';
import { useEffect, useRef, useState } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { useTexture, Text } from '@react-three/drei';
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
  RigidBodyProps
} from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import * as THREE from 'three';

extend({ MeshLineGeometry, MeshLineMaterial });

// Declare custom JSX elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}

const lanyardTexture = `/lanyard/lanyard.png?v=${Date.now()}`;
const profileImage = '/jocelin.jpeg';

interface LanyardProps {
  position?: [number, number, number];
  gravity?: [number, number, number];
  fov?: number;
  transparent?: boolean;
}

export default function Lanyard({
  position = [0, 0, 30],
  gravity = [0, -40, 0],
  fov = 20,
  transparent = true
}: LanyardProps) {
  const [isMobile, setIsMobile] = useState<boolean>(() => typeof window !== 'undefined' && window.innerWidth < 768);
  const [contextLost, setContextLost] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const handleResize = (): void => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle WebGL context loss/restore
  const handleCreated = ({ gl }: { gl: THREE.WebGLRenderer }) => {
    gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1);

    const canvas = gl.domElement;

    const handleContextLost = (event: Event) => {
      event.preventDefault();
      setContextLost(true);
      console.log('WebGL context lost, will attempt to restore...');
    };

    const handleContextRestored = () => {
      setContextLost(false);
      console.log('WebGL context restored');
    };

    canvas.addEventListener('webglcontextlost', handleContextLost);
    canvas.addEventListener('webglcontextrestored', handleContextRestored);
  };

  if (contextLost) {
    return (
      <div className="w-full h-[500px] flex items-center justify-center">
        <button
          onClick={() => setContextLost(false)}
          className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/80 transition-colors"
        >
          Reload 3D View
        </button>
      </div>
    );
  }

  return (
    <div className="w-full h-[500px]">
      <Canvas
        camera={{ position, fov }}
        dpr={[1, isMobile ? 1 : 1.5]}
        gl={{
          alpha: transparent,
          antialias: !isMobile,
          powerPreference: 'low-power',
          failIfMajorPerformanceCaveat: false
        }}
        onCreated={handleCreated}
      >
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Physics gravity={gravity} timeStep={1 / 30}>
          <Band isMobile={isMobile} />
        </Physics>
      </Canvas>
    </div>
  );
}

// Custom ID Card component - simplified for performance
function IDCard({ isMobile }: { isMobile: boolean }) {
  const photoTexture = useTexture(profileImage);

  // Card dimensions
  const cardWidth = 1.6;
  const cardHeight = 2.25;
  const photoSize = 0.85;

  return (
    <group>
      {/* Card background - simple box */}
      <mesh position={[0, 0, -0.01]}>
        <boxGeometry args={[cardWidth, cardHeight, 0.03]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.5} />
      </mesh>

      {/* Card front face */}
      <mesh position={[0, 0, 0.006]}>
        <planeGeometry args={[cardWidth - 0.06, cardHeight - 0.06]} />
        <meshBasicMaterial color="#f5f0e8" />
      </mesh>

      {/* Accent stripe at top */}
      <mesh position={[0, cardHeight / 2 - 0.15, 0.007]}>
        <planeGeometry args={[cardWidth - 0.06, 0.22]} />
        <meshBasicMaterial color="#e85d04" />
      </mesh>

      {/* Profile photo */}
      <mesh position={[0, 0.32, 0.008]}>
        <circleGeometry args={[photoSize / 2, isMobile ? 24 : 32]} />
        <meshBasicMaterial map={photoTexture} />
      </mesh>

      {/* Photo border ring */}
      <mesh position={[0, 0.32, 0.0075]}>
        <ringGeometry args={[photoSize / 2, photoSize / 2 + 0.04, isMobile ? 24 : 32]} />
        <meshBasicMaterial color="#e85d04" />
      </mesh>

      {/* Name text */}
      <Text
        position={[0, -0.28, 0.008]}
        fontSize={0.14}
        color="#1a1a1a"
        anchorX="center"
        anchorY="middle"
      >
        Jocelin Darma
      </Text>

      {/* Role text */}
      <Text
        position={[0, -0.5, 0.008]}
        fontSize={0.09}
        color="#666666"
        anchorX="center"
        anchorY="middle"
      >
        Full Stack Developer
      </Text>

      {/* Card clip at top - simplified */}
      <mesh position={[0, cardHeight / 2 + 0.1, 0]}>
        <boxGeometry args={[0.25, 0.12, 0.06]} />
        <meshStandardMaterial color="#777777" metalness={0.6} roughness={0.4} />
      </mesh>
    </group>
  );
}


interface BandProps {
  maxSpeed?: number;
  minSpeed?: number;
  isMobile?: boolean;
}

function Band({ maxSpeed = 50, minSpeed = 0, isMobile = false }: BandProps) {
  const band = useRef<any>(null);
  const fixed = useRef<any>(null);
  const j1 = useRef<any>(null);
  const j2 = useRef<any>(null);
  const j3 = useRef<any>(null);
  const card = useRef<any>(null);

  const vec = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const rot = new THREE.Vector3();
  const dir = new THREE.Vector3();

  const segmentProps: any = {
    type: 'dynamic' as RigidBodyProps['type'],
    canSleep: true,
    colliders: false,
    angularDamping: 4,
    linearDamping: 4
  };

  const texture = useTexture(lanyardTexture);
  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()])
  );
  const [dragged, drag] = useState<false | THREE.Vector3>(false);
  const [hovered, hover] = useState(false);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.45, 0]
  ]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab';
      return () => {
        document.body.style.cursor = 'auto';
      };
    }
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (dragged && typeof dragged !== 'boolean') {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach(ref => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z
      });
    }
    if (fixed.current) {
      [j1, j2].forEach(ref => {
        if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
        const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())));
        ref.current.lerped.lerp(
          ref.current.translation(),
          delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
        );
      });
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);
      curve.points[3].copy(fixed.current.translation());
      band.current.geometry.setPoints(curve.getPoints(16));
      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
    }
  });

  curve.curveType = 'chordal';
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type={'fixed' as RigidBodyProps['type']} />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps} type={'dynamic' as RigidBodyProps['type']}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps} type={'dynamic' as RigidBodyProps['type']}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps} type={'dynamic' as RigidBodyProps['type']}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[2, 0, 0]}
          ref={card}
          {...segmentProps}
          type={dragged ? ('kinematicPosition' as RigidBodyProps['type']) : ('dynamic' as RigidBodyProps['type'])}
        >
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e: any) => {
              e.target.releasePointerCapture(e.pointerId);
              drag(false);
            }}
            onPointerDown={(e: any) => {
              e.target.setPointerCapture(e.pointerId);
              drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())));
            }}
          >
            <IDCard isMobile={isMobile} />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="white"
          depthTest={false}
          resolution={[500, 500]}
          useMap
          map={texture}
          repeat={[-4, 1]}
          lineWidth={1}
        />
      </mesh>
    </>
  );
}
