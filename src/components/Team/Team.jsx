import React from 'react';
import style from './Team.module.scss';
import Button from '../Button/Button';
import { useTranslation } from 'react-i18next';
import Reveal from '../Reveal/Reveal';
import TextUp from '../Reveal/TextUp';
export default function Team() {
  const [activeBackground, setActiveBackground] = React.useState(true);
  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollY = window.pageYOffset;
      if (scrollY > 2345) {
        setActiveBackground(true);
      }
    });
  }, []);

  const { t } = useTranslation();
  return (
    <section id="team" className={style.team}>
      <TextUp>
        <h2>{t('team.title')}</h2>
      </TextUp>

      <div className={style.teamWrapper}>
        <div className={style.teamWrapperLeft}>
          <Reveal>
            <p style={{ whiteSpace: 'pre-line' }}>{t('team.subtitle')}</p>
          </Reveal>

          <Button width={219} height={52} font={24}>
            {t('team.button')}
          </Button>
        </div>
        <div className={`${style.teamWrapperRight} ${activeBackground ? style.afterClass : ''}`}>
          <div className={style['img-container']}>
            <img src="./team.jpg" alt="team" />
          </div>
        </div>
      </div>
    </section>
  );
}
