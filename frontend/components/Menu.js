function Menu() {
  return (
    <div>
      <div className={styles.header}>
        <Image src={logo} alt="logo" width={90} className={styles.logo} />
      </div>
      <div className={styles.menu}>
        <link>HOME</link>
        <link>PROJECTS</link>
        <link>SKILLS</link>
        <link>PERSONALITY</link>
        <link>CONTACT</link>
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
