import React, { useState, useEffect } from "react";

import "../Components/navbar.css";
import { FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const handelToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navClass = `main-nav ${scrolling ? "scrolled" : ""}`;
  return (
    <>
      <div className="container">
        <nav className={navClass}>
          {/*  logo section*/}
          <div className="logo">
            <h2>
              <span>H</span>ome
              <span>F</span>ood
              <span>S</span>ervice
            </h2>
          </div>
          {/*  menu items*/}
          <div className={toggle ? "mobile-menu-link" : "menu-link"}>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/service">Services</a>
              </li>
            </ul>
          </div>
          {/* social sites */}
          <div className="social-media">
            <ul className="social-media-desktop">
              <li>
                <a href="https://www.youtube.com/" target="_youtube">
                  <FaYoutube className="youtube" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/" target="_facebook">
                  <FaFacebook className="facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/" target="_twitter">
                  <FaTwitter className="twitter" />
                </a>
              </li>
            </ul>
            <div className="hamburger-menu">
              <a onClick={handelToggle}>
                <GiHamburgerMenu />
              </a>
            </div>
          </div>
        </nav>
      </div>
      {/* herosectionn
       */}

      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Home Food Service</h1>
      </section>

      {/* <section className="hero-section">
        <h1>Our services</h1>
      </section> */}
    </>
  );
};

export default Navbar;
