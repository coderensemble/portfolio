import styles from "../styles/Menu.module.css"
import Link from "next/link";
import React from "react";
import logo from "../asset/logo.svg";
import Image from "next/image";
import world from "../asset/world.svg";
import circle from "../asset/Circle.png";

function Menu() {
  return (
    <div>
      <div className={styles.header}>
        <Image src={logo} alt="logo" width={90} className={styles.logo} />
      </div>
      <div className={styles.menu}>
        <Link href="/">HOME</Link>
        <Link href="/#section1">PROJECTS</Link>
        <Link href="/#section2">SKILLS</Link>
        <Link href="/#section3">PERSONALITY</Link>
        <Link href="/#section4">CONTACT</Link>
      </div>
      <div className={styles.worldCircle}>
          <div className={styles.circle}>
            <Image src={circle} alt="pitchPortfolio" />
          </div>
          <div className={styles.world}>
            <Image src={world} alt="worldPict" />
          </div>
        </div>
    </div>
  );
}

export default Menu;
