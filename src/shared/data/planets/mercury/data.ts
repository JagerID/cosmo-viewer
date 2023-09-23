import { Planet } from "@/shared/types";

export const textures = {
  DEFAULT: {
    name: "Стандартный вид",
    texture: "/textures/mercury/default.jpg",
  },
  COLORED: {
    name: "Вид в цвете",
    texture: "/textures/mercury/colored.jpg",
  },
};

export const mercury: Planet = {
  position: 1,
  name: "Меркурий",
  gravity: 3.7,
  mass: 0.330103,
  orbitalPeriod: 0.2408467,
  radius: 2440.53,
  texture: textures.DEFAULT.texture,
  textures,
};
