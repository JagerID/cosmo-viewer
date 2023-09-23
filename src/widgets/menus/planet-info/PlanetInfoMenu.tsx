import { Planet } from "@/shared/types";
import {
  formatRadius,
  formatMass,
  formatOrbitalPeriod,
  formatGravity,
} from "@/shared/utils/calc";

const PlanetInfoMenu = ({ planet }: { planet: Planet }) => {
  return (
    <div className="flex flex-col gap-2` rounded">
      <h3 className="text-xl font-medium">Информация о планете</h3>
      <ul className="flex flex-col gap-1">
        <li className="flex items-center justify-between gap-2">
          <p className="text-sm">Радиус</p>
          <p className="text-sm">{formatRadius(planet.radius)}</p>
        </li>
        <li className="flex items-center justify-between gap-2">
          <p className="text-sm">Масса</p>
          <p className="text-sm">{formatMass(planet.mass)}</p>
        </li>
        <li className="flex items-center justify-between gap-2">
          <p className="text-sm">Орбитальный период</p>
          <p className="text-sm">{formatOrbitalPeriod(planet.orbitalPeriod)}</p>
        </li>
        <li className="flex items-center justify-between gap-2">
          <p className="text-sm">УСП</p>
          <p className="text-sm">{formatGravity(planet.gravity)}</p>
        </li>
      </ul>
    </div>
  );
};

export default PlanetInfoMenu;
