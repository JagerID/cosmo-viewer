import { create } from "zustand";
import { PlanetStoreState } from "./types";
import { earth } from "@/shared/data/planets";

const initialState = { planet: earth };

export const usePlanetStore = create<PlanetStoreState>()((set) => ({
  ...initialState,

  setTexture: (texture) =>
    set((state) => ({ planet: { ...state.planet, texture } })),

  setPlanet: (planet) => set({ planet }),
}));
