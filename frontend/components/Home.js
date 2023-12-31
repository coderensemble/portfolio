import styles from "../styles/Home.module.css";
import Image from "next/image";
import world from "../asset/world.svg";
import circle from "../asset/Circle.png";
import React from "react";

function Home() {
  return (
    <div className={styles.body}>
      <main className={styles.main}>
        <div className={styles.ellipse1}></div>
        <div className={styles.ellipse2}></div>
        <div className={styles.worldCircle}>
          <div className={styles.title}>
            <div>Welcome, my name is Adrien Neyron,</div>
            <div>I'm a fullstack web developer.</div>
            <div>Feel free to take a look at my latest projects.</div>
          </div>
          <div className={styles.circle}>
            <Image src={circle} alt="pitchPortfolio" style={{ width: '80%', height: '80%'}} />
          </div>
          <div className={styles.world}>
            <Image src={world} alt="worldPict" style={{ width: '80%' }}/>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
