import { Planet as PlanetInstance } from "@/shared/types";
import { Sphere, SphereProps } from "@/shared/ui/three";
import { convertRadiusToPlanetSize } from "@/shared/utils/calc";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export interface PlanetProps extends SphereProps {
  planet: PlanetInstance;
}

export const Planet = ({ planet, materialProps, ...props }: PlanetProps) => {
  const map = useLoader(TextureLoader, planet.texture);
  const radius = convertRadiusToPlanetSize(planet.radius);

  return (
    <Sphere
      {...props}
      materialProps={{ ...materialProps, map }}
      geometryProps={{ args: [radius, 32, 32] }}
    />
  );
};
