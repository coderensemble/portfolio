import styles from "../styles/Projects.module.css";
import React, { useEffect, useState } from "react";
import Image from "next/image";

function CarouselComponent() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    return () => {
      setIsClient(false); // Détruire l'état lorsque le composant est démonté
    };
  }, []);

  const renderCarousel = () => {
    if (isClient) {
      // Charger la bibliothèque uniquement côté client
      const Carousel = require("3d-react-carousal").Carousel;
      const project2 = require("../asset/project2.png");
      const project3 = require("../asset/Project3.png");
      const project4 = require("../asset/Project4.png");
      const project5 = require("../asset/Project5.png");

      let slides = [
        <div className={styles.carouselItem}>
          <Image src={project2} alt="Image 2" />
          <div className={styles.imageTitle}>Titre de l'image 2</div>
        </div>,
        <div className={styles.carouselItem}>
          <Image src={project3} alt="Image 3" />
          <div className={styles.imageTitle}>Titre de l'image 3</div>
        </div>,
        <div className={styles.carouselItem}>
          <Image src={project4} alt="Image 4" />
          <div className={styles.imageTitle}>Titre de l'image 4</div>
        </div>,
        <div className={styles.carouselItem}>
          <Image src={project5} alt="Image 5" />
          <div className={styles.imageTitle}>Titre de l'image 5</div>
        </div>,
      ];

      return (
        <div className={styles.body}>
          <div className={styles.carousel}>
            <Carousel slides={slides} autoplay={true} interval={5000} arrows={false}/>
          </div>
        </div>
      );
    }
    return;
  };

  return renderCarousel();
}

export default CarouselComponent;
