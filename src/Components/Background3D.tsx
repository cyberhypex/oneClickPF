import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

export default function Background3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <color attach="background" args={["black"]} />
        
        <Stars
          radius={100}
          depth={60}
          count={5000}
          factor={4}
          saturation={0}
          fade
          
          speed={5}
        />

        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}