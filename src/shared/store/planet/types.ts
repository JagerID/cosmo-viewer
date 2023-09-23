import { Planet } from "@/shared/types";

export interface PlanetStoreState {
  planet: Planet;

  setTexture: (texture: string) => void;
  setPlanet: (planet: Planet) => void;
}
