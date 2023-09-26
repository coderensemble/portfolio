import React, { useState, useEffect } from "react";
import styles from "../styles/Contact.module.css";
import Image from "next/image";
import satellite from "../asset/bWcrOF01.svg";
import github from "../asset/github.png";
import linkedin from "../asset/linkedin.png";

function Contact() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const currentPosition = window.scrollY;
    setScrollPosition(currentPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculer la position horizontale en fonction de la position de défilement
  const horizontalPosition = scrollPosition * 0.25; // Vous pouvez ajuster la vitesse

  return (
    <div className={styles.body}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Let's Work Together!</h2>
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            type="text"
            placeholder="Your Name"
          />
          <input
            className={styles.input}
            type="email"
            placeholder="Your Email"
          />
          <textarea
            className={styles.textarea}
            placeholder="Your Message"
          ></textarea>
          <button className={styles.button}>Send Message</button>
        </div>
        <div className={styles.socialLinks}>
          <a href="#" className={styles.socialLink}>
            <Image src={github} alt="GitHub" height={38}/>
          </a>
          <a href="#" className={styles.socialLink}>
            <Image src={linkedin} alt="LinkedIn" height={38} />
          </a>
        </div>
      </div>
      <Image
        src={satellite}
        alt="Satellite"
        className={styles.satellite}
        style={{
          left: `${horizontalPosition}px`,
        }}
      />
    </div>
  );
}

export default Contact;
