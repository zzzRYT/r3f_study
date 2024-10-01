"use client";

import JewelryContent from "./_components/JewelryContent";
import styles from "./whateverUnit.module.css";
import JewelryList from "../_components/Jewelrylist";
import { createContext, useState } from "react";
export const JewelryContext = createContext<string>("");

export default function WhateverUnitPage({
  params,
}: {
  params: { item: string };
}) {
  const [selectJewelry, setSelectJewelry] = useState<string>("");
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
