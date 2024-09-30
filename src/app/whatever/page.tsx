import WhateverUnitBox from "./_components/WhateverItem";
import styles from "./whatever.module.css";

export default function WhatEverPage() {
  return (
    <>
      <div>whatever 리스트임</div>
      <ul className={styles.listContainer}>
        <WhateverUnitBox num={1} />
        <WhateverUnitBox num={2} />
        <WhateverUnitBox num={3} />
        <WhateverUnitBox num={4} />
        <WhateverUnitBox num={5} />
      </ul>
    </>
  );
}
