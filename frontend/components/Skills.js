import styles from "../styles/Skills.module.css";
import { useEffect, useState } from "react";

function Skills() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxOffset = scrollY * 0.15;

  const ellipseStyle = {
    backdropFilter: 'blur(2px)'
  };

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.stars} style={{ transform: `translateY(${parallaxOffset}px)` }}>
        <div className={styles.textAndStar1}>
          <h1 className={styles.title1}>FIGMA / TRELLO</h1> <div className={styles.ellipse1}></div>
        </div>
        <div className={styles.textAndStar2}>
          <h1 className={styles.title2}>NODE JS / EXPRESS</h1> <div className={styles.ellipse2}></div>
        </div>
        <div className={styles.textAndStar3}>
          <h1 className={styles.title3}>JS / TS / CSS / HTML</h1> <div className={styles.ellipse3}></div>
        </div>
        <div className={styles.textAndStar4}>
          <h1 className={styles.title4}>MONGO DB / MONGOOSE</h1> <div className={styles.ellipse4}></div>
        </div>
        <div className={styles.textAndStar5}>
          <h1 className={styles.title5}>REACT / NEXT</h1> <div className={styles.ellipse5}></div>
        </div>
        <div className={styles.textAndStar6}>
          <h1 className={styles.title6}>REACT NATIVE</h1> <div className={styles.ellipse6}></div>
        </div>
        <div className={styles.textAndStar7}>
          <h1 className={styles.title7}>EXPO / VERCEL</h1> <div className={styles.ellipse7}></div>
        </div>
        </div>
        <div className={styles.bigEllipse} style={ellipseStyle}></div>
      </div>
    </div>
  );
}

export default Skills;
