import styles from "./whatever.module.css"

export default function WhateverLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <nav className={styles.container}>whatever page</nav>
      {children}
    </>
  )
}
