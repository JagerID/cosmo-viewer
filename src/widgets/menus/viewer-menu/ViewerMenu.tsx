import { usePlanetStore } from "@/shared/store/planet";
import { ChangeTextureMenu } from "..";
import { IoPlanetOutline } from "react-icons/io5";
import PlanetInfoMenu from "../planet-info/PlanetInfoMenu";

export const ViewerMenu = () => {
  const { planet } = usePlanetStore();

  return (
    <div className="absolute px-5 py-3 rounded left-4 top-4 w-[300px] bg-white z-[2] flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <IoPlanetOutline className="w-7 h-7" />
        <h2 className="text-2xl font-semibold">{planet.name}</h2>
      </div>
      <PlanetInfoMenu planet={planet} />
      <ChangeTextureMenu />
    </div>
  );
};
