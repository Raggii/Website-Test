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
        <div className={styles.cow_header} />
        <section className={styles.text_header}>
          <div>
            <h3>Meeting the Needs of the Modern Dairy Farm</h3>
            <div>
              <Link to="/contact" className={styles.makeEnquiry}>
                Make an enquiry
              </Link>
            </div>
          </div>
        </section>
      </header>
      <main className={styles.main}>
        <ImageTextParallelSection
          title="Chase Bovine Services"
          img={cows_image_1}
          img_alt="cows_img_1"
        >
          <p>
            We use veterinary expertise and sound nutrition advice to improve
            animal health, operational efficiency and profitability for New
            Zealand dairy farmers.
          </p>
        </ImageTextParallelSection>

        <ImageTextParallelSection
          title="Veterinary Consulting"
          img={cows_image_2}
          img_alt="cows_image_2"
          flip={true}
        >
          <p>
            We provide on-farm investigation and records analysis that identify
            opportunities allowing implementation of sustainable solutions for
            challenges with:
          </p>
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
          <p>
            We work with you to develop feeding strategies and trace mineral
            formulations to successfully prepare your cows for calving,
            lactation and mating through:
          </p>
          <ul>
            <li>Body Condition Management</li>
            <li>Maximising Immune Status</li>
            <li>Prevention of Metabolic Disease</li>
            <li>Balanced Nutrient Formulation</li>
          </ul>
        </ImageTextParallelSection>

        <AboutMeSectionSmall></AboutMeSectionSmall>
      </main>
      <footer>
        <article></article>
        <div>
          <Link to="/contact" className={styles.makeEnquiry}>
            Make an enquiry
          </Link>
        </div>
      </footer>
    </>
  );
};

// Might add some seperate divs around each button, as the margins are relative to the text in them
// not the padding around them! Causes weird distances if you play with the padding of the buttins!
//  - But have not quite figured out how this works,,, needs playing with.

const AboutMeSectionSmall = () => {
  return (
    <section className={styles.aboutMeSectionSmall}>
      <div className={styles.about_info}>
        <img src={dr_charles_chase_2} alt="Dr-Charles-Chase-2" />
        <div className={styles.about_name}>Charles Chase, DVM, MS</div>
        <div className={styles.about_job}>Doctor of Veterinary Medicine</div>
      </div>
      <Link to="/about-me" className={styles.about_link}>
        About me
      </Link>
    </section>
  );
};

const ImageTextParallelSection = ({ title, img, img_alt, flip, children }) => {
  if (flip) {
    return (
      <section className={styles.testimonialContainer}>
        <div>
          <img
            src={img}
            alt={img_alt}
            className={styles.testimonialsImages}
          ></img>
        </div>
        <article>
          <h3>{title}</h3>
          <div>{children}</div>
        </article>
      </section>
    );
  } else {
    return (
      <section className={styles.testimonialContainer}>
        <article>
          <h3>{title}</h3>
          <div>{children}</div>
        </article>
        <div>
          <img
            src={img}
            alt={img_alt}
            className={styles.testimonialsImages}
          ></img>
        </div>
      </section>
    );
  }
};

export default Home;
