// src/components/Hero.jsx
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Hero = () => {
  return (
    <section id="home" className="home">
      <div className="main" id="home-anchor">
        <div className="detail">
          <h1
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="0"
          >
            <span>Hello there!</span> <br /> I'm{' '}
            <span className="name">Monikaa</span>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            Aspiring Aerospace Engineer passionate about space exploration,
            dedicated to advancing space technology through expertise and
            innovation.
          </p>
          <div className="social">
            <a
              href="#"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
              data-aos-mirror="true"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://www.instagram.com/monikaa_murali"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/monikaa-murali"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>

        <div className="images">
          <img
            src="./img/Profile Light.png"
            alt="Photo"
            width="100%"
            data-mode="light"
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-delay="0"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
