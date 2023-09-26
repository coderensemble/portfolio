import styles from "../styles/Personality.module.css";
import Image from "next/image";
import profil from "../asset/AN.png";

function Personality() {
  return (
    <div className={styles.body}>
      <Image src={profil} alt="profilPict" />
      {/* <div className={styles.textContainer}></div> */}
      <div className={styles.text}>
        <p>
          Mon expérience précédente en tant que formateur d'éducateur sportif m'a apporté des compétences essentielles
          telles que le leadership, la communication et la résolution de problèmes.
        </p>
        <p>
          Cependant, ma soif de défis et ma fascination pour la technologie m'ont conduit à plonger dans le monde du
          développement web.
        </p>
        <p>
          J'ai suivi une formation intensive en développement fullstack pour acquérir une expertise complète, couvrant à
          la fois le front-end et le back-end
        </p>
        <p>
          Ce parcours de reconversion a été une aventure incroyable, me permettant d'explorer ma créativité et de
          résoudre des problèmes complexes à travers la programmation.
        </p>
      </div>

      <div className={styles.bigEllipse1}></div>
      <div className={styles.bigEllipse2}></div>
    </div>
  );
}

export default Personality;
