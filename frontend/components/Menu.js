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
        <Link href="/"><Image src={logo} alt="logo" width={90} className={styles.logo} /></Link>
      </div>
      <div className={styles.main}>
        <div className={styles.menu}>
          <Link href="/"><div>HOME</div></Link>
          <div><Link href="/#section1">PROJECTS</Link></div>
          <div><Link href="/#section2">SKILLS</Link></div>
          <div><Link href="/#section3">PERSONALITY</Link></div>
          <div><Link href="/#section4">CONTACT</Link></div>
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
