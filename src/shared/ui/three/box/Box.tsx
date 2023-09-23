import {
  BoxGeometryProps,
  MeshProps,
  MeshStandardMaterialProps,
} from "@react-three/fiber";
import { Mesh } from "../mesh";

export interface BoxProps {
  meshProps?: MeshProps;
  geometryProps?: BoxGeometryProps;
  materialProps?: MeshStandardMaterialProps;
}

export const Box = ({ meshProps, geometryProps, materialProps }: BoxProps) => {
  return (
    <Mesh {...meshProps}>
      <boxGeometry {...geometryProps} />
      <meshStandardMaterial {...materialProps} />
    </Mesh>
  );
};
