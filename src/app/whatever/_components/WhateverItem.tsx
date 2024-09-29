import Link from "next/link"
import styles from "./whateverItem.module.css"

export default function WhateverUnitBox({ num }: { num: number }) {
  return (
    <li className={styles.container}>
      <Link href={`whatever/${num}`}>
        <div className={styles.item}>whatever unit box {num}</div>
      </Link>
    </li>
  )
}
