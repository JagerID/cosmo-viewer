import { usePlanetStore } from "@/shared/store/planet";
import { Texture } from "@/shared/types";
import { cx } from "class-variance-authority";

export const TextureChanger = ({ texture }: { texture: Texture }) => {
  const { planet, setTexture } = usePlanetStore();

  return (
    <div
      className={cx(
        "flex items-center gap-3 px-4 py-2 bg-white rounded shadow-lg cursor-pointer hover:shadow-xl",
        {
          "bg-gray-200": planet.texture === texture.texture,
        }
      )}
      onClick={() => setTexture(texture.texture)}
    >
      <img
        className={cx("w-10 h-10 rounded shadow-lg")}
        src={texture.texture}
      />
      <p
        className={cx({
          "font-medium": planet.texture === texture.texture,
        })}
      >
        {texture.name}
      </p>
    </div>
  );
};
