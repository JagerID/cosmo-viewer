import { ViewerMenu } from "@/widgets/menus";
import { Scene } from "../widgets/three";
import { Planet } from "../widgets/three/planet";
import { usePlanetStore } from "@/shared/store/planet";
import { ChangePlanetMenu } from "@/widgets/menus/change-planet/ChangePlanetMenu";

export const Viewer = () => {
  const { planet } = usePlanetStore();

  return (
    <>
      <ViewerMenu />
      <ChangePlanetMenu />
      <Scene>
        <Planet planet={planet} />
      </Scene>
    </>
  );
};
