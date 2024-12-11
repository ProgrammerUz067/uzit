import React from 'react';
import styles from './Services.module.scss';
import Tarrifs from './Tarrifs';
import { useTranslation } from 'react-i18next';
import { tariffsItem } from './data.js';
import Reveal from '../Reveal/Reveal.jsx';
import TextUp from '../Reveal/TextUp.jsx';

export default function Services() {
  const { t } = useTranslation();

  const tarriffArray1 = t('services.tarrifs1', { returnObjects: true });
  const tarriffArray2 = t('services.tarrifs2', { returnObjects: true });
  const tarriffArray3 = t('services.tarrifs3', { returnObjects: true });

  const tarriffImg1 = tariffsItem[0].services.map((img) => img);
  const tarriffImg2 = tariffsItem[1].services.map((img) => img);
  const tarriffImg3 = tariffsItem[2].services.map((img) => img);

  // const tarriffTitle2 = t('services.tarrifs2', { returnObjects: true });

  return (
    <section id="services" className={styles.services}>
      <div className={styles.servicesWrapper}>
        {' '}
        <TextUp delay='0.25'>
          <h2 className={styles.servicesTitle}>{t('services.title')}</h2>{' '}
        </TextUp>
        <TextUp>
          {' '}
          <p className={styles.servicesSubtitle}>{t('services.subtitle')}</p>
        </TextUp>
      </div>
      <div className={styles.tarrifsWrapper}>
        {' '}
        <Tarrifs
          delay="100"
          aos="fade-up"
          description={tarriffArray1[0].services}
          title={tarriffArray1[0].title}
          img={tarriffImg1}
        />
        <Tarrifs
          delay="300"
          aos="fade-up"
          description={tarriffArray2[0].services}
          title={tarriffArray2[0].title}
          img={tarriffImg2}
        />
        <Tarrifs
          delay="500"
          aos="fade-up"
          description={tarriffArray3[0].services}
          title={tarriffArray3[0].title}
          img={tarriffImg3}
        />

     
      </div>



   
      
    </section>
  );
}
