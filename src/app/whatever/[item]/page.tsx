import JewelryContent from "./_components/JewelryContent"
import styles from "./whateverUnit.module.css"

export default function WhateverUnitPage({
  params,
}: {
  params: { item: string }
}) {
  return (
    <>
      <header>whatever {params.item} 유닛임</header>
      <main className={styles.content}>
        <div className={styles.itemContent}>
          <ul className={styles.comboBox}>콤보박스</ul>
          <JewelryContent />
        </div>
        <ul className={styles.listContent}>리스트</ul>
      </main>
    </>
  )
}
