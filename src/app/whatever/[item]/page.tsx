"use client";

import JewelryContent from "./_components/JewelryContent";
import styles from "./whateverUnit.module.css";
import JewelryList from "../_components/Jewelrylist";
import { createContext, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export interface JewelryContextType {
  jewelry: string;
  x: number;
  y: number;
}

export const JewelryContext = createContext<JewelryContextType>({
  jewelry: "",
  x: 0,
  y: 0,
});

export default function WhateverUnitPage({
  params,
}: {
  params: { item: string };
}) {
  const [selectJewelry, setSelectJewelry] = useState<JewelryContextType>({
    jewelry: "",
    x: 0,
    y: 0,
  });
  return (
    <>
      <header>whatever {params.item} 유닛임</header>
      <main className={styles.content}>
        <JewelryContext.Provider value={selectJewelry}>
          <div className={styles.itemContent}>
            <ul className={styles.comboBox}>콤보박스</ul>
            <JewelryContent setJewelry={setSelectJewelry} />
          </div>
          <div className={styles.listContent}>
            <JewelryList />
          </div>
        </JewelryContext.Provider>
      </main>
    </>
  );
}
