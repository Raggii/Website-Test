import React from "react";
import { Link } from "react-router-dom";
import cows_image_1 from "./../assets/misc-and-some-duplicates-256-3.jpg";
import cows_image_2 from "./../assets/cows-for-wallpaper2-3.jpg";
import cows_image_3 from "./../assets/misc-and-some-duplicates-195-2-1024x683.jpg";
import dr_charles_chase_2 from "./../assets/Dr-Charles-Chase-2.jpg";

import styles from "./../styles/home.module.css";

const Home = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.cow_header}></div>
        <section className={styles.text_header}>
          <h3>Meeting the Needs of the Modern Dairy Farm</h3>
          <Link to="/contact">Make an enquiry</Link>
        </section>
      </header>
      <main className={styles.main}>
        <ImageTextParallelSection
          title="Chase Bovine Services"
          img={cows_image_1}
          img_alt="cows_img_1"
        >
          We use veterinary expertise and sound nutrition advice to improve
          animal health, operational efficiency and profitability for New
          Zealand dairy farmers.
        </ImageTextParallelSection>

        <ImageTextParallelSection
          title="Veterinary Consulting"
          img={cows_image_2}
          img_alt="cows_image_2"
          flip={true}
        >
          We provide on-farm investigation and records analysis that identify
          opportunities allowing implementation of sustainable solutions for
          challenges with:
          <ul>
            <li>Transition Diseases</li>
            <li>Reproductive Performance</li>
            <li>Milk Production (Volume and Components)</li>
            <li>Lameness</li>
            <li>Mastitis and Somatic Cell Count</li>
          </ul>
        </ImageTextParallelSection>

        <ImageTextParallelSection
          title="Nutritional Services"
          img={cows_image_3}
          img_alt="cows_image_3"
        >
          We work with you to develop feeding strategies and trace mineral
          formulations to successfully prepare your cows for calving, lactation
          and mating through:
          <ul>
            <li>Body Condition Management</li>
            <li>Maximising Immune Status</li>
            <li>Prevention of Metabolic Disease</li>
            <li>Balanced Nutrient Formulation</li>
          </ul>
        </ImageTextParallelSection>

        <AboutMeSection></AboutMeSection>
      </main>
      <footer>
        <Link to="/contact">Make an enquiry</Link>
      </footer>
    </>
  );
};

const AboutMeSection = () => {
  return (
    <section className="container">
      <img src={dr_charles_chase_2} alt="Dr-Charles-Chase-2" />
      <div className="testimonial-name"></div>
      <div className="testimonial-job"></div>
      <Link to="/about-me">About me</Link>
    </section>
  );
};

const ImageTextParallelSection = ({ title, img, img_alt, flip, children }) => {
  if (flip) {
    return (
      <section className="container">
        <img
          src={img}
          alt={img_alt}
          style={{
            width: "40vw",
            height: "27vw",
            marginRight: "1rem",
            borderStyle: "solid",
            borderWidth: "10px 10px 10px 10px",
            borderColor: "#ffffff",
            boxShadow: "10px 10px 20px 0px rgba(0,0,0,0.12)",
          }}
        ></img>
        <article>
          <div>
            <h3>{title}</h3>
            <p>{children}</p>
          </div>
        </article>
      </section>
    );
  } else {
    return (
      <section className="container">
        <article>
          <div>
            <h3>{title}</h3>
            <p>{children}</p>
          </div>
          <img
            src={img}
            alt={img_alt}
            style={{
              width: "40vw",
              height: "27vw",
              marginRight: "1rem",
              borderStyle: "solid",
              borderWidth: "10px 10px 10px 10px",
              borderColor: "#ffffff",
              boxShadow: "10px 10px 20px 0px rgba(0,0,0,0.12)",
            }}
          ></img>
        </article>
      </section>
    );
  }
};

export default Home;
