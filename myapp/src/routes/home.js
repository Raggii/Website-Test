import React from "react";
import { Link } from "react-router-dom";
import MG_7755 from "./../assets/MG_7755.jpg";
import article_image_1 from "./../assets/misc-and-some-duplicates-256-3.jpg";
import article_image_2 from "./../assets/cows-for-wallpaper2-3.jpg";
import article_image_3 from "./../assets/misc-and-some-duplicates-195-2-1024x683.jpg";

const Home = () => {
  return (
    <main>
      <h1>Home Page</h1>
      <img src={MG_7755} alt="MG_7755.jpg" />
      <section>
        <h3>Meeting the Needs of the Modern Dairy Farm</h3>
        <Link to="/contact">Make an enquiry</Link>
      </section>
      <section className="container">
        <article>
          <div>
            <h3>Chase Bovine Services</h3>
            <p>
              We use veterinary expertise and sound nutrition advice to improve
              animal health, operational efficiency and profitability for New
              Zealand dairy farmers.
            </p>
          </div>
          <img
            src={article_image_1}
            alt="misc-and-some-duplicates-256-3.jpg"
            style={{
              width: "40vw",
              height: "27vw",
              "margin-right": "1rem",
              "border-style": "solid",
              "border-width": "10px 10px 10px 10px",
              "border-color": "#ffffff",
              "box-shadow": "10px 10px 20px 0px rgba(0,0,0,0.12)",
            }}
          ></img>
        </article>
      </section>
    </main>
  );
};

export default Home;
