export type Texture = {
  name: string;
  texture: string;
};

export interface Planet {
  position: number;
  name: string;
  textures: Record<string, Texture>; // text list
  texture: string; // path list to texture image
  radius: number; // km
  mass: number; // 10^24 kg
  gravity: number; // m / s^-2
  orbitalPeriod: number; // year
}
