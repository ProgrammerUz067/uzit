import React from 'react';
import styles from './Questions.module.scss';
import Form from './Form';
import { useTranslation } from 'react-i18next';
import TextUp from '../Reveal/TextUp';
import Reveal from '../Reveal/Reveal';

export default function Questions() {
  const { t } = useTranslation();
  
  return (
    <section id='questions' className={styles.questions}>
      <div className="w-[90%] m-auto ques_container">
      <TextUp delay='0.25'>
          <h2 className="text-[90px] font-bold">{t('questions.title')}</h2>
        </TextUp>

        <div className="flex m-auto justify-between pr-[50px] ques_form">
          <Reveal>
            <Form />
          </Reveal>

          <img src="./qr-code.png" alt="qrcode" />
        </div>
      </div>
      <TextUp>
        <p className="text-center mt-[70px] font-bold text-[18px]">{t('questions.subtitle')}</p>
      </TextUp>
    </section>
  );
}
