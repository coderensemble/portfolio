import styles from "../styles/Home.module.css";
import Image from "next/image";
import world from "../asset/world.svg";
import circle from "../asset/Circle.png";
import pilote from "../asset/pilote.svg";
import logo from "../asset/logo.svg";

function Home() {
  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <Image src={logo} alt="logo" width={90} className={styles.logo}/>
        <Image src={pilote} alt="menu" width={90} className={styles.pilote}/>
      </div>
      <main className={styles.main}>
        <div className={styles.ellipse1}></div>
        <div className={styles.ellipse2}></div>
        <div className={styles.worldCircle}>
          <h1 className={styles.title}>
            <div>Welcome, my name is Adrien Neyron,</div>
            <div>I'm a fullstack web developer.</div>
            <div>Feel free to take a look at my latest projects.</div>
          </h1>
          <div className={styles.circle}>
            <Image src={circle} alt="pitchPortfolio" />
          </div>
          <div className={styles.world}>
            <Image src={world} alt="worldPict" />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home;
