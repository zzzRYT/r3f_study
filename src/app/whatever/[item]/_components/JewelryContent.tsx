import getSelectJewelry from "../utils/getSelectJewelry";
import style from "./jewelryContent.module.css";

export default function JewelryContent() {
  const jewelry = {
    keyRing: [
      { name: "finishing", x: 3, y: 4 },
      { name: "chain", x: 1, y: 2 },
      { name: "chain", x: 3, y: 2 },
      { name: "chain", x: 5, y: 2 },
      { name: "pendant", x: 2, y: 3 },
      { name: "pendant", x: 4, y: 3 },
      { name: "pendant", x: 1, y: 1 },
      { name: "pendant", x: 3, y: 1 },
      { name: "pendant", x: 5, y: 1 },
    ],
  };

  return (
    <article className={style.container}>
      {jewelry.keyRing.map((item: any, index) => {
        return (
          <div
            style={{ gridColumn: 6 - item.x, gridRow: 6 - item.y }}
            key={`${index}${item.name}`}
          >
            {getSelectJewelry(item.name)}
          </div>
        );
      })}
    </article>
  );
}
