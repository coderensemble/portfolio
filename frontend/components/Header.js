import styles from "../styles/Header.module.css";
import Image from "next/image";
import pilote from "../asset/pilote.svg";
import logo from "../asset/logo.svg";
import Link from "next/link";

function Header() {
  return (
    <div className={styles.header}>
      <Link href="/">
          <Image src={logo} alt="logo" width={90} className={styles.logo} />
      </Link>
      <Link href="/menu">
          <Image src={pilote} alt="menu" width={90} className={styles.pilote} />
      </Link>
    </div>
  );
}

export default Header;
