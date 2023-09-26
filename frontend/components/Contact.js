import styles from "../styles/Contact.module.css";
import Image from "next/image";
import satellite from "../asset/bWcrOF01.svg";
import React, { useState, useEffect } from "react";


function Contact() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const updatePosition = (e) => {
    const newX = e.clientX; // Coordonnée X basée sur la position horizontale de la souris
    const newY = e.clientY; // Coordonnée Y basée sur la position verticale de la souris
    setPosition({ x: newX, y: newY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updatePosition);
    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  return (
    <div className={styles.body}>
      <div>CONTACT</div>
      <Image src={satellite} alt="satellite" style={{
          position: "absolute", // Position absolue pour permettre le suivi du curseur
          left: `${position.x}px`, // Coordonnée X basée sur la position horizontale du curseur
          top: `${position.y}px`, // Coordonnée Y basée sur la position verticale du curseur
        }}/>
    </div>
  );
}

export default Contact;
