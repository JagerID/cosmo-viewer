import { Stars } from "@react-three/drei";

export const Space = () => {
  return (
    <mesh>
      <Stars radius={100} depth={10} count={1000000} fade />
    </mesh>
  );
};
