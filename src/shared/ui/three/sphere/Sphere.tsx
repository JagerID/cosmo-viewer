import {
  SphereGeometryProps,
  MeshProps,
  MeshStandardMaterialProps,
} from "@react-three/fiber";
import { Mesh } from "../mesh";

export interface SphereProps {
  meshProps?: MeshProps;
  geometryProps?: SphereGeometryProps;
  materialProps?: MeshStandardMaterialProps;
}

export const Sphere = ({
  meshProps,
  geometryProps,
  materialProps,
}: SphereProps) => {
  return (
    <Mesh {...meshProps}>
      <sphereGeometry {...geometryProps} />
      <meshStandardMaterial {...materialProps} />
    </Mesh>
  );
};
