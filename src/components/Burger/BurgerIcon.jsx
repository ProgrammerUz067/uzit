import React from 'react';
import styles from './Burger.module.scss';

export default function BurgerIcon({ openBurger, setOpenBurger }) {
  console.log(openBurger);
  return (
    <div onClick={() => setOpenBurger(!openBurger)} className={styles.toggleBtn}>
      <button className={`${styles.burger} ${openBurger ? styles.active : ''}`}></button>
    </div>
  );
}
