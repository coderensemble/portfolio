import styles from "../styles/Menu.module.css";
import Link from "next/link";
import React from "react";
import logo from "../asset/logo.svg";
import Image from "next/image";
import world from "../asset/world.svg";
import circle from "../asset/Circle.png";

function Menu() {
  return (
    <div className={styles.all}>
      <div className={styles.header}>
        <Link href="/">
          <Image src={logo} alt="logo" width={90} className={styles.logo} />
        </Link>
      </div>
      <div className={styles.main}>
        <div className={styles.ellipse1}></div>
        <div className={styles.menu}>
          <div>
            <Link href="/" className={styles.section}>
              HOME
            </Link>
          </div>
          <div>
            <Link href="/#section1" className={styles.section}>
              PROJECTS
            </Link>
          </div>
          <div>
            <Link href="/#section2" className={styles.section}>
              SKILLS
            </Link>
          </div>
          <div>
            <Link href="/#section3" className={styles.section}>
              PERSONALITY
            </Link>
          </div>
          <div>
            <Link href="/#section4" className={styles.section}>
              CONTACT
            </Link>
          </div>
        </div>
        <div className={styles.worldCircle}>
          <div className={styles.circle}>
            <Image src={circle} alt="circle" />
          </div>
          <div className={styles.world}>
            <Image src={world} alt="worldPict" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
