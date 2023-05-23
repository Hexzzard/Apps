import React from 'react'

import HeaderMenuDefault from './HeaderMenuDefault.jsx'
import MenuItemDefault from './MenuItemDefault'
import Button from './Button'
import Hero5 from './Hero5'

import styles from './Home.module.scss'

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.relativeWrapperThree}>
        <div className={styles.header2}>
          <div className={styles.navItems}>
            <p className={styles.autoEducate}>
              AutoEducate
            </p>
            <HeaderMenuDefault
              className={styles.headerMenuDefault}
            />
            <MenuItemDefault
              className={styles.menuItemDefault}
            />
            <MenuItemDefault
              className={styles.headerMenuDefault}
            />
          </div>
          <div className={styles.rightNav}>
            <Button className={styles.button} />
            <Button className={styles.button} />
          </div>
        </div>
        <div className={styles.header3}>
          <div className={styles.navItems}>
            <p className={styles.autoEducate}>
              AutoEducate
            </p>
            <HeaderMenuDefault
              className={styles.headerMenuDefault}
            />
            <MenuItemDefault
              className={styles.menuItemDefault}
            />
            <MenuItemDefault
              className={styles.headerMenuDefault}
            />
          </div>
          <div className={styles.rightNav}>
            <Button className={styles.button} />
            <Button className={styles.button} />
          </div>
        </div>
      </div>
      <Hero5 className={styles.hero5} />
      <div className={styles.relativeWrapperThree}>
        <div className={styles.footerMini2}>
          <p
            className={
              styles.num2023AutoEducateTodosLosDerechosR
            }
          >
            © 2023 AutoEducate. Todos los derechos
            reservados
          </p>
        </div>
        <div className={styles.footerMini3}>
          <p
            className={
              styles.num2023AutoEducateTodosLosDerechosR
            }
          >
            © 2023 AutoEducate. Todos los derechos
            reservados
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
