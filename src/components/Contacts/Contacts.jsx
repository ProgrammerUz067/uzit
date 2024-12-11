import React from 'react';
import styles from './Contacts.module.scss';
import Button from '../Button/Button.jsx';

import { useTranslation } from 'react-i18next';
import TextUp from '../Reveal/TextUp.jsx';
import Reveal from '../Reveal/Reveal.jsx';

export default function Contacts() {
  const { t } = useTranslation();
  return (
    <section id="contacts" className={styles.contacts}>
      <TextUp delay='0.25'>
        <h2 className="text-[90px] font-bold">{t('questions.contacts.title')}</h2>
      </TextUp>

      <div className={styles.contactsWrapper}>
        <Reveal>
          <div className={styles.contactsLeft}>
            <iframe
              className="mt-[70px] ml-[25px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3070.424438348312!2d66.98303877650403!3d39.68515989983944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d19c517fa93c9%3A0xa8444b0a543319ca!2z0JjQsdC9INCh0LjQvdGLIDc!5e0!3m2!1sru!2s!4v1707369184930!5m2!1sru!2s"
              width="700"
              height="475"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </Reveal>
        <Reveal>
          <div className={styles.contactsRight}>
            <div className="flex justify-between contact_contaiter">
              <div className="flex flex-col gap-2">
                <h3 className="#F2F2F2 text-[30px] font-bold">{t('questions.contacts.numbers')}</h3>
                <a
                  className="text-[18px] opacity-[50%] hover:opacity-[100%] font-bold"
                  href="tel:+998905044665">
                  +998(33)233-80-80
                </a>
                <a
                  className="text-[18px] opacity-[50%] hover:opacity-[100%] font-bold"
                  href="tel:+998905044665">
                  +998(95)233-80-80
                </a>
                <h3 className="#F2F2F2 text-[30px] font-bold">{t('questions.contacts.email')}</h3>
                <a
                  className="text-[18px] opacity-[50%] hover:opacity-[100%] font-bold"
                  href="https://mail.google.com/mail/u/0/#inbox">
                  uzitgroup@gmail.com
                </a>
                <h3 className="#F2F2F2 text-[30px] font-bold">{t('questions.contacts.adress')}</h3>
                <a className="text-[18px] opacity-[50%] hover:opacity-[100%] font-bold" href="dsa">
                  Aeroport, Samarkand, UZ
                </a>
              </div>
              <div className="ml-[120px] pr-[50px]">
                <h3 className="#F2F2F2 text-[30px] font-bold">
                  {t('questions.contacts.location')}
                </h3>
                <span className="opacity-[50%]">{t('questions.contacts.toGet')}</span>
                <div className="mt-[25px]">
                  {' '}
                  <Button font={24} width={184} height={52}>
                    Yandex
                  </Button>
                </div>
                <div className="mt-[70px]">
                  {' '}
                  <Button font={24} width={184} height={52}>
                    <a href="https://www.google.com/maps/dir//%D0%9C%D0%B5%D0%B6%D0%B4%D1%83%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9+%D0%B0%D1%8D%D1%80%D0%BE%D0%BF%D0%BE%D1%80%D1%82+%D0%A1%D0%B0%D0%BC%D0%B0%D1%80%D0%BA%D0%B0%D0%BD%D0%B4+(Air+Marakanda),+%D1%83%D0%BB.+%D0%98%D0%B1%D0%BD+%D0%A1%D0%B8%D0%BD%D0%BE+1,+140151,+Samarkand,+%D0%A1%D0%B0%D0%BC%D0%B0%D1%80%D0%BA%D0%B0%D0%BD%D0%B4%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C/@39.6992192,66.9848852,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3f4d186f52c226fd:0x116671ede6eaae78!2m2!1d66.9848852!2d39.6992192?entry=ttu">
                      Google maps
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
