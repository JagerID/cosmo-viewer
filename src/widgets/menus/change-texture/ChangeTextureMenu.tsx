import { TextureChanger } from "@/features/texture-changer";
import { usePlanetStore } from "@/shared/store/planet";

export const ChangeTextureMenu = () => {
  const { planet } = usePlanetStore();

  return (
    <div className="flex flex-col gap-2 rounded">
      <h3 className="text-xl font-medium">Вид планеты</h3>
      <ul className="flex flex-col gap-2">
        {Object.values(planet.textures).map((texture) => (
          <li key={texture.name}>
            <TextureChanger texture={texture} />
          </li>
        ))}
      </ul>
    </div>
  );
};
