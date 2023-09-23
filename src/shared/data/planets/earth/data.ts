import { Planet } from "../../../types";

export const textures = {
  DAY: { name: "Дневной вид", texture: "/textures/earth/day.jpg" },
  NIGHT: { name: "Ночной вид", texture: "/textures/earth/night.jpg" },
  CLOUDS: { name: "Вид облаков", texture: "/textures/earth/clouds.jpg" },
};

export const earth: Planet = {
  position: 3,
  name: "Земля",
  gravity: 9.8,
  mass: 5.97217,
  orbitalPeriod: 1.000174,
  radius: 6378.1366,
  texture: textures.DAY.texture,
  textures,
};
