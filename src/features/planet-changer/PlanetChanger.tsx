import { usePlanetStore } from "@/shared/store/planet";
import { Planet } from "@/shared/types";
import { cx } from "class-variance-authority";

export const PlanetChanger = ({ planet }: { planet: Planet }) => {
  const { planet: currentPlanet, setPlanet } = usePlanetStore();

  return (
    <div
      className={cx(
        "flex items-center gap-3 px-4 py-2 bg-white rounded shadow-lg cursor-pointer hover:shadow-xl",
        {
          "bg-gray-200": currentPlanet.name === planet.name,
        }
      )}
      onClick={() => setPlanet(planet)}
    >
      <p
        className={cx({
          "font-medium": currentPlanet.name === planet.name,
        })}
      >
        {planet.name}
      </p>
    </div>
  );
};
