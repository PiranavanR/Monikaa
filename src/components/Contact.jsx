// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        {/* Left Section */}
        <div className="contact-left">
          <div className="space-card">
            <img
              src="https://uiverse.io/astronaut.png"
              alt="astronaut"
              className="space-image"
              style={{ scale: 1.5 }}
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-delay="0"
            />
            <div className="heading">Let's Connect!</div>
            <div className="icons"></div>
          </div>
        </div>

        {/* Right Section */}
        <div className="contact-right">
          <div className="form-container">
            <form
              className="form"
              id="contact-form"
              action="https://api.web3forms.com/submit"
              method="POST"
            >
              <input
                type="hidden"
                name="access_key"
                value="6e9f2228-3ec9-4561-b8e0-d80db53b9e5d"
              />

              <div
                className="form-group"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                data-aos-delay="0"
              >
                <label>Name</label>
                <input required name="name" id="name" type="text" />
              </div>

              <div
                className="form-group"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <label htmlFor="email">Email</label>
                <input required name="email" id="email" type="email" />
              </div>

              <div
                className="form-group"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <label htmlFor="textarea">Drop your thoughts here</label>
                <textarea
                  required
                  cols="50"
                  rows="10"
                  id="textarea"
                  name="textarea"
                ></textarea>
              </div>

              <center>
                <button
                  type="submit"
                  className="form-submit-btn"
                  data-aos="zoom-in-up"
                  data-aos-duration="800"
                  data-aos-delay="700"
                >
                  Submit<span></span>
                </button>
              </center>
            </form>
          </div>
        </div>
      </div>

      {/* Success Message */}
      <div id="successMessage" className="successMessage">
        <div className="checkbox-wrapper-12">
          <div className="cbx">
            <input
              id="cbx-12"
              className="animated-checkbox"
              type="checkbox"
              defaultChecked
            />
            <label htmlFor="cbx-12"></label>
            <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
              <path d="M2 8.36364L6.23077 12L13 2"></path>
            </svg>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
              <filter id="goo-12">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="4"
                  result="blur"
                ></feGaussianBlur>
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7"
                  result="goo-12"
                ></feColorMatrix>
                <feBlend in="SourceGraphic" in2="goo-12"></feBlend>
              </filter>
            </defs>
          </svg>
        </div>

        <div className="title">Success!!</div>
        <div className="description">
          Thank you for reaching out! Your message has been received, and I'll
          get back to you shortly. Looking forward to connecting with you!
        </div>

        <div id="dismiss-btn" className="dismiss-btn">
          <button id="dismiss-popup-btn">Dismiss</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
