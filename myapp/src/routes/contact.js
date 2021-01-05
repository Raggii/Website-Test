import React, { useState } from "react";

import styles from "./../styles/contact.module.css";

const Contact = () => {
  const [enquiry, setEnquiry] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const attName = e.target.name;
    const attValue = e.target.value;

    setEnquiry({ ...enquiry, [attName]: attValue });
  };

  return (
    <>
      <main>
        <section>
          <articale>
            <p>Thank you for your enquiry. You may contact us directly at:</p>
            <ul>
              <li>crchasedvm@hotmail.com,</li>
              <li>+64 027 940 0017, or</li>
              <li>fill out the form below.</li>
            </ul>
            <p>We will get back with you as soon as possible.</p>
          </articale>
          <form>
            <div>
              <label htmlFor="fullName">Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={enquiry.fullName}
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={enquiry.email}
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <input
                type="text"
                id="message"
                name="message"
                value={enquiry.message}
                onChange={handleChange}
              ></input>
            </div>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                alert(enquiry);
              }}
            >
              Submit
            </button>
          </form>
        </section>
      </main>
    </>
  );
};

export default Contact;
