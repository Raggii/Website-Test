import React from "react";
import styles from "./Ingrediants.module.css";

const IngediantRow = () => {
  return (
    <div className={styles.dataRow}>
      <select className={styles.ingrediant}>
        <option value={0}>Spring - Irrigated</option>
      </select>
      <div className={styles.dataCol}>
        <input />
      </div>
      <div className={styles.dataCol}>
        <input />
      </div>
      <div className={styles.dataCol}>
        <input />
      </div>
      <div className={styles.dataCol}>
        <input />
      </div>
      <div className={styles.dataCol}>
        <input />
      </div>
      <div className={styles.dataCol}>
        <input />
      </div>
      <div className={styles.dataCol}>
        <input />
      </div>
      <div className={styles.dataCol}>
        <input />
      </div>
      <div className={styles.dataCol}>
        <input />
      </div>
      <div className={styles.dataCol}>
        <input />
      </div>
      <div className={styles.dataCol}>
        <input />
      </div>
      <div className={styles.dataCol}>
        <input />
      </div>
      <div className={styles.dataCol}>
        <input />
      </div>
      <div className={styles.dataCol}>
        <input />
      </div>
      <div className={styles.dataCol}>
        <input />
      </div>
      <div className={styles.dataCol}>
        <input />
      </div>
    </div>
  );
};

export default function Ingredients() {
  return (
    <div className={styles.tableGrid}>
      <div className={styles.headerRow}>
        <div className={styles.ingrediant}>Ingrediant</div>
        <div className={styles.dataCol}>Kgs</div>
        <div className={styles.dataCol}>Wet/Dry</div>
        <div className={styles.dataCol}>Util %</div>
        <div className={styles.dataCol}>DMI</div>
        <div className={styles.dataCol}>DM%</div>
        <div className={styles.dataCol}>Site</div>

        <div className={styles.dataCol}>ME</div>
        <div className={styles.dataCol}>CP</div>
        <div className={styles.dataCol}>NDF</div>
        <div className={styles.dataCol}>Ca</div>
        <div className={styles.dataCol}>P</div>
        <div className={styles.dataCol}>Mg</div>
        <div className={styles.dataCol}>K</div>
        <div className={styles.dataCol}>Na</div>
        <div className={styles.dataCol}>CI</div>
        <div className={styles.dataCol}>S</div>
      </div>

      <IngediantRow></IngediantRow>
      <IngediantRow></IngediantRow>
      <IngediantRow></IngediantRow>
      <IngediantRow></IngediantRow>
      <IngediantRow></IngediantRow>
      <IngediantRow></IngediantRow>
      <IngediantRow></IngediantRow>
      <IngediantRow></IngediantRow>
      <IngediantRow></IngediantRow>
    </div>
  );
}
