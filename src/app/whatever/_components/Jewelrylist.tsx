"use client";

import { useContext, useEffect, useState } from "react";
import { JewelryContext } from "../[item]/page";

const finishingJewelry = [
  {
    name: "finishing",
    id: 1,
    finishingName: "마감 이름1",
    price: 2000,
  },
  {
    name: "finishing",
    id: 2,
    finishingName: "마감 이름2",
    price: 2000,
  },
  1,
];

const pendantJewelry = [
  {
    name: "pendant",
    id: 1,
    finishingName: "펜던트 이름1",
    price: 3000,
  },
  {
    name: "pendant",
    id: 2,
    finishingName: "펜던트 이름2",
    price: 3000,
  },
];

const chainJewelry = [
  {
    name: "chain",
    id: 1,
    finishingName: "체인 이름1",
    price: 4000,
  },
  {
    name: "chain",
    id: 2,
    finishingName: "체인 이름2",
    price: 4000,
  },
];

export default function JewelryList() {
  const jewelry = useContext(JewelryContext);
  const [jewelryList, setJewelryList] = useState<any>([...finishingJewelry]);

  const getSearchedJewelry = (jewelry: string) => {
    const obj = {
      pendant: () => setJewelryList([...pendantJewelry]),
      finishing: () => setJewelryList([...finishingJewelry]),
      chain: () => setJewelryList([...chainJewelry]),
    } as const;
    return obj[jewelry];
  };

  useEffect(() => {
    const searchJewelry = getSearchedJewelry(jewelry.jewelry);
    if (searchJewelry) {
      searchJewelry(); // 함수를 호출합니다.
    }
  }, [jewelry]);

  return (
    <ul>
      {jewelryList.map((item: any) => {
        return (
          <li key={item.id}>
            <span>{item.finishingName}</span>
            <span>{item.price}</span>
          </li>
        );
      })}
    </ul>
  );
}
