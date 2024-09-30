import Chain from "../_components/Chain";
import Finishing from "../_components/Finishing";
import Pendant from "../_components/Pendant";

export default function getSelectJewelry(
  jewelry: "chain" | "finishing" | "pendant"
) {
  const obj = {
    chain: <Chain />,
    finishing: <Finishing />,
    pendant: <Pendant />,
  } as const;
  return obj[jewelry];
}
