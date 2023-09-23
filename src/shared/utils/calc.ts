import { earth } from "../data/planets";

export const convertRadiusToPlanetSize = (radius: number): number => {
  const scale = (radius * 2) / earth.radius;
  return scale;
};

export const formatRadius = (radius: number): string => {
  const formattedRadius = `${radius.toFixed(2)} км`;
  return formattedRadius;
};

export const formatMass = (mass: number): string => {
  const formattedMass = `${mass.toFixed(2)} * 10^24 кг`;
  return formattedMass;
};

export const formatOrbitalPeriod = (orbitalPeriod: number): string => {
  const yearDays = 365;
  const formattedOrbitalPeriod = `${(orbitalPeriod * yearDays).toFixed(
    0
  )} дней`;
  return formattedOrbitalPeriod;
};

export const formatGravity = (gravity: number): string => {
  const formattedGravity = `${gravity} м/с^2`;
  return formattedGravity;
};
