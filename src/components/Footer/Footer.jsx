import React from 'react';
import styles from './Footer.module.scss';
import { useTranslation } from 'react-i18next';
export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <img src="./UZIT logo.png" alt="logo" />
      <h3 className="text-[18px] font-bold opacity-[50%]">
        © 2024 UZIT GROUP <br /> {t('rights.text')}      </h3>
    </footer>
  );
}
