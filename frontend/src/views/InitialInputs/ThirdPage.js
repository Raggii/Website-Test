import React, { useState, useEffect } from "react";
import styles from "./ThridPage.module.css";
import { FormWrapper } from "../../comps/FromWrapper/FormWrapper";

function LevelSelection({ title }) {
  const [option, setOption] = useState(0);

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  return (
    <div className={styles.selectionWrap}>
      <h6 className={styles.selectTitle}>{title}</h6>
      <select className={styles.selectLevel} value={option} onChange={handleChange}>
        <option value={0}>None</option>
        <option value={1}>Slight</option>
        <option value={2}>Moderate</option>
        <option value={3}>Very</option>
      </select>
    </div>
  );
}

export default function ThirdPage() {
  return (
    <FormWrapper>
      <div className="d-flex justify-content-center mt-5">
        <div className="loginContainerRadio">
          <h2 className="m-5 text-center">Animal Health Concerns</h2>
          <div className={styles.animalHealthConcernWrap}>
            <LevelSelection title="Lameness"></LevelSelection>
            <LevelSelection title="Somatic Cell Count"></LevelSelection>
            <LevelSelection title="Body Condition"></LevelSelection>

            <h5 className={styles.groupTitle}>Reproductive Performance</h5>
            <LevelSelection title="NonCycler Cows"></LevelSelection>
            <LevelSelection title="6 weeks in calf (%)"></LevelSelection>
            <LevelSelection title="Final Empty (%)"></LevelSelection>

            <h5 className={styles.groupTitle}>Transition Disease Incidence</h5>
            <LevelSelection title="Uterine Disease - RFM"></LevelSelection>
            <LevelSelection title="Mastities"></LevelSelection>
            <LevelSelection title="Ketosis - Metabolic Dz"></LevelSelection>

            <h5 className={styles.groupTitle}>Trace Miniral Monitoring</h5>
            <LevelSelection title="Selenium Status"></LevelSelection>
            <LevelSelection title="Copper Deficiency"></LevelSelection>
            <LevelSelection title="Copper Toxcitiy"></LevelSelection>

            <h5 className={styles.groupTitle}>Dietary Antagonists</h5>
            <LevelSelection title="Iron"></LevelSelection>
            <LevelSelection title="Molybdenum"></LevelSelection>
          </div>
          <div className="buttons mt-4">
            <div className="row">
              <div className="col-6">
                <a type="button" className="btn btn-danger" href="/DataCollect2">
                  Cancel
                </a>
              </div>
              <div className="col-6">
                <a type="button" className="btn btn-primary" href="/DataCollect4">
                  Continue
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FormWrapper>
  );
}
