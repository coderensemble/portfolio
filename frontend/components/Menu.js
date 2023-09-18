function Menu() {
  return (
    <div>
      <div className={styles.header}>
        <Image src={logo} alt="logo" width={90} className={styles.logo} />
      </div>
      <div className={styles.menu}>
        <div>HOME</div>
        <div>PROJECTS</div>
        <div>SKILLS</div>
        <div>PERSONAdivTY</div>
        <div>CONTACT</div>
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
