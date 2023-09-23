import { PlanetChanger } from "@/features/planet-changer";
import { planets } from "@/shared/data/planets";

export const ChangePlanetMenu = () => {
  return (
    <div className="absolute px-5 py-3 rounded right-4 top-4 w-[280px] bg-white z-[2] flex flex-col gap-4">
      <div className="flex flex-col gap-2 rounded">
        <h3 className="text-xl font-medium">Планета</h3>
        <ul className="flex flex-col gap-2">
          {Object.values(planets).map((planet) => (
            <li key={planet.name}>
              <PlanetChanger planet={planet} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
