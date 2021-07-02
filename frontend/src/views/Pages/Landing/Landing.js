import React from "react";
import styles from "./Landing.module.css";
import logo from "./../../../assets/white-transparent-logo.png";
import img1 from "./../../../assets/misc-and-some-duplicates-256-3.jpg";
import img2 from "./../../../assets/misc-and-some-duplicates-195-2-1024x683.jpg";
import img3 from "./../../../assets/index-image-3.jpg";
import img4 from "./../../../assets/index-image-4.jpg";
import { Link } from "react-router-dom";

function Section({ imgSrc, imgAlt, imgIsLeft, children }) {
  if (imgIsLeft) {
    return (
      <>
        <section
          className={styles.infoSection}
          style={{ backgroundColor: "#161616ff", color: "#f5f5f5" }}
        >
          <img
            className={styles.sectionImage}
            style={{ marginLeft: "auto" }}
            src={imgSrc}
            alt={imgAlt}
          ></img>
          <div className={styles.sectionChildrenWrap}>{children}</div>
        </section>
      </>
    );
  } else {
    return (
      <>
        <section
          className={styles.infoSection}
          style={{ backgroundColor: "#f5f5f5", color: "#161616ff" }}
        >
          <div className={styles.sectionChildrenWrap} style={{ marginLeft: "auto" }}>
            {children}
          </div>
          <img className={styles.sectionImage} src={imgSrc} alt={imgAlt}></img>
        </section>
      </>
    );
  }
}

export default function LandingPage() {
  return (
    <>
      <header className={styles.navbar}>
        <img src={logo} alt="Chase Bovine Services Logo" className={styles.navLogo}></img>
        <Link className={styles.loginButton} to="/login">
          Login
        </Link>
      </header>
      <main>
        <div className={styles.titleWrap}>
          <div className={styles.bannerGradient}>
            <div className={styles.bannerBetween}>
              <div className={styles.titleCard}>
                <h1 className={styles.titleCardContent}>Chase Bovine Services</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Section 1 */}
        <Section imgSrc={img1} imgAlt="Some image" imgIsLeft={true}>
          <h2>Ask-Mindy</h2>
          <h5>Trace Mineral Formulation Tool:</h5>
          <ul>
            <li>Create a bespoke formulation based on animal requirements</li>
            <li>
              Select from CBS blend formulations designed to meet the challeneges of NZ dairy cattle
            </li>
          </ul>
        </Section>

        {/* Section 2 */}
        <Section imgSrc={img2} imgAlt="Some image" imgIsLeft={false}>
          <h2>Time Budget Calculator</h2>
          <h5>Analysis of daily activities for the grazing dairy herd:</h5>

          <ul>
            <li>
              Determine if your cows are adequate lying time to reduce stress for improved
              production, performance and animal health
            </li>
            <li>Evaluate how management strategies can influence the time budget of the herd</li>
          </ul>
        </Section>

        {/* Section 3 */}
        <Section imgSrc={img3} imgAlt="Cow image 3" imgIsLeft={true}>
          <h2>Evalu-Ration</h2>
          <h5>Evaluation of current ration relative to requirements:</h5>
          <ul>
            <li>Analyze the current diet as well as examine the impact of changes</li>
          </ul>
        </Section>

        {/* Section 4 */}
        <Section imgSrc={img4} imgAlt="Cow image 3" imgIsLeft={false}>
          <h2>Milk Revenue Calculator</h2>
          <h5>Informed decision making for changes in management strategies:</h5>

          <ul>
            <li>Expected benefits and break-even analysis prior to making changes</li>
            <li>
              Evaluate the outcome of changes based on production responses relative to changes in
              input costs
            </li>
          </ul>
        </Section>
      </main>
      <footer className={styles.indexFooter}>Chase Bovine Services 2021 &#169;</footer>
    </>
  );
}
