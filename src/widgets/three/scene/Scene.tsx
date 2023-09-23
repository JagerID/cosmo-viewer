import { Html, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ReactNode, Suspense } from "react";
import { TbLoader3 } from "react-icons/tb";
import { Space } from "../space";

export const Scene = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-screen h-screen">
      <Canvas className="bg-black">
        <OrbitControls />
        <ambientLight color="white" />
        <directionalLight position={[2, 2, 2]} color="white" intensity={10} />
        <Space />

        <Suspense
          fallback={
            <Html center>
              <TbLoader3 className="w-20 h-20 text-white animate-spin" />
            </Html>
          }
        >
          {children}
        </Suspense>
      </Canvas>
    </div>
  );
};
