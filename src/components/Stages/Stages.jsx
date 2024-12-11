import React from 'react';
import styles from './Stages.module.scss';
import { useTranslation } from 'react-i18next';
import TextUp from '../Reveal/TextUp';
import Reveal from '../Reveal/Reveal';
export default function Stages() {
  const [startAnimation, setStartAnimation] = React.useState(false);
  const { t } = useTranslation();
  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollY = window.pageYOffset;
      if (scrollY > 4610) {
        setStartAnimation(true);
      }
    });
  }, []);

  return (
    <section className={styles.stages}>
      <TextUp delay='0.25'>
        <h2 className={styles.stagesTitle}>{t('stages.title')}</h2>
      </TextUp>

      <div className={styles.stagesLineWrapper}>
        {/* 1 */}
        <div className="w-[20%] relative">
          {' '}
          <h2
            className={`absolute top-[-35px] left-[-50px] text-[#5DC792] font-bold text-[18px] ${
              startAnimation ? styles.activeCircle : ''
            }`}>
            {t('stages.stages1')}
          </h2>
          <div className="flex items-center w-full">
            <div className={`${styles.stagesCircle} ${startAnimation ? styles.activeCircle : ''}`}>
              <div className={styles.miniCircle}></div>
            </div>
            <div
              className={`${styles.stagesLine} ${
                startAnimation ? styles.activeFirstLine : ''
              }`}></div>
          </div>
        </div>

        {/* 2 */}
        <div className="w-[20%] relative">
          {' '}
          <h2
            className={`absolute opacity-0 top-[-35px] left-[-15px] text-[#5DC792] font-bold text-[18px] ${
              startAnimation ? styles.activeCircleSecond : ''
            }`}>
            {t('stages.stages2')}
          </h2>
          <div className="flex items-center w-full">
            <div
              className={`${styles.stagesCircle} ${
                startAnimation ? styles.activeCircleSecond : ''
              }`}>
              <div className={styles.miniCircle}></div>
            </div>
            <div
              className={`${styles.stagesLine} ${
                startAnimation ? styles.activeSecondLine : ''
              }`}></div>
          </div>
        </div>

        {/* 3 */}
        <div className="w-[20%] relative">
          {' '}
          <h2
            className={`absolute opacity-0 top-[-35px] left-[-20px] text-[#5DC792] font-bold text-[18px] ${
              startAnimation ? styles.activeCircleThird : ''
            }`}>
            {t('stages.stages3')}
          </h2>
          <div className="flex items-center w-full">
            <div
              className={`${styles.stagesCircle} ${
                startAnimation ? styles.activeCircleThird : ''
              }`}>
              <div className={styles.miniCircle}></div>
            </div>
            <div
              className={`${styles.stagesLine} ${
                startAnimation ? styles.activeThirdLine : ''
              }`}></div>
          </div>
        </div>
        {/* 4 */}
        <div className="w-[20%] relative">
          {' '}
          <h2
            className={`absolute opacity-0 top-[-35px] left-[8%] translate-x-[-50%] text-[#5DC792] font-bold text-[18px] ${
              startAnimation ? styles.activeCircleFour : ''
            }`}>
            {t('stages.stages4')}
          </h2>
          <div className="flex items-center w-full">
            <div
              className={`${styles.stagesCircle} ${startAnimation ? styles.activeCircleFour : ''}`}>
              <div className={styles.miniCircle}></div>
            </div>
            <div
              className={`${styles.stagesLine} ${
                startAnimation ? styles.activeFourLine : ''
              }`}></div>
          </div>
        </div>
        {/* 5 */}
        <div className="w-[20%] relative">
          {' '}
          <h2
            className={`absolute opacity-0 top-[-35px] left-[8%] translate-x-[-50%]  text-[#5DC792] font-bold text-[18px] ${
              startAnimation ? styles.activeCircleFive : ''
            }`}>
            {t('stages.stages5')}
          </h2>
          <div className="flex items-center w-full">
            <div
              className={`${styles.stagesCircle} ${startAnimation ? styles.activeCircleFive : ''}`}>
              <div className={styles.miniCircle}></div>
            </div>
            <div
              className={`${styles.stagesLine} ${
                startAnimation ? styles.activeFiveLine : ''
              }`}></div>
          </div>
        </div>
        {/* 6 */}

        {/* 7 */}
        <div className="relative">
          {' '}
          <h2
            className={`absolute opacity-0 top-[-35px] left-[-40px] text-[#5DC792] font-bold text-[18px] ${
              startAnimation ? styles.activeCircleSix : ''
            }`}>
            {t('stages.stages6')}
          </h2>
          <div className="flex items-center w-full">
            <div
              className={`${styles.stagesCircle} ${startAnimation ? styles.activeCircleSix : ''}`}>
              <div className={styles.miniCircle}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-auto w-[80%]">
        <Reveal>
          
          <p className="text-start text-[19px] font-bold mt-[50px]">{t('stages.subtitle')}</p>
        </Reveal>
      </div>
    </section>
  );
}
