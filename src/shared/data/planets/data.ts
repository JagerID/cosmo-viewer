import { Planet } from "../../types";
import { earth } from "./earth";
import { mercury } from "./mercury";

// https://ssd.jpl.nasa.gov/planets/phys_par.html
// https://www.solarsystemscope.com/textures/

export const planets: Record<string, Planet> = { earth, mercury };
