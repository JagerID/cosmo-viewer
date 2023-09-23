import { MeshProps } from "@react-three/fiber";
import { ReactNode, useEffect, useState } from "react";

export const Mesh = ({
  children,
  ...props
}: MeshProps & { children: ReactNode }) => {
  const [hovered, setHovered] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  return (
    <mesh
      {...props}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {children}
    </mesh>
  );
};
