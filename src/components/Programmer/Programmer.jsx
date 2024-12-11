import React from 'react';
import style from './Programmer.module.scss';
import ProgrammerServices from './ProgrammerServices';
import { useTranslation } from 'react-i18next';
import TextUp from '../Reveal/TextUp';

export default function Programmer() {
  const { t } = useTranslation();


  return (
    <section className={style.programmer}>
      <h2 className="text-[44px] font-bold text-center lg:text-[80px] md:text-[60px] sm:text-[44px]">
        {t('programmer.mainTitle')}
      </h2>

      <div className={style.programmerWrapper}>
        <TextUp delay="0.25">
          <ProgrammerServices
            title={t('programmer.title1')}
            img={'./programmer/landing.png'}
            description={t('programmer.subtitle1')}
          />
        </TextUp>

        <TextUp delay="0.50">
          <ProgrammerServices
            title={t('programmer.title2')}
            description={t('programmer.subtitle2')}
            img={'./programmer/e-commerce.png'}
          />
        </TextUp>

        <TextUp delay="0.75">
          <ProgrammerServices
            title={t('programmer.title3')}
            description={t('programmer.subtitle3')}
            img={'./programmer/change-website.png'}
          />
        </TextUp>

        <TextUp delay="0.95">
          <ProgrammerServices
            title={t('programmer.title4')}
            description={t('programmer.subtitle4')}
            img={'./programmer/telegram-bot.png'}
          />
        </TextUp>

        <TextUp delay="1.25">
          <ProgrammerServices
            title={t('programmer.title5')}
            description={t('programmer.subtitle5')}
            img={'./programmer/admin-dashboard.png'}
          />
        </TextUp>

        <TextUp delay="1.50">
          <ProgrammerServices
            title={t('programmer.title6')}
            description={t('programmer.subtitle6')}
            img={'./programmer/crm.png'}
          />
        </TextUp>
      </div>
    </section>
  );
}
