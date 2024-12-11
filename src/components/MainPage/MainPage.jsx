import React from 'react';
import style from './MainPage.module.scss';
import Sphere from '../Nova/Sphere';
import Button from '../Button/Button';
import { useTranslation } from 'react-i18next';
import Reveal from '../Reveal/Reveal';
import { useEffect, useState } from 'preact/hooks';

export default function MainPage() {
  const { t } = useTranslation();
  const [showMain, setShowMain] = useState(false)
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    console.log(scrollTop);
    if (scrollTop >= 900) {
      setShowMain(true) 
      
    } else {
      setShowMain(false)
      
    }
  };
  useEffect(()=>{
    window.addEventListener('scroll', handleScroll)

    return () =>{
      window.removeEventListener('scroll', handleScroll)
    }
  },[])
 
  return (
    <div className={`${style.mainPage} ${showMain ? 'opacity-[0%]' : ''}`}>
      <div className="w-[60%] z-10">
        {' '}
        <Reveal delay="8.8">
          <h1 className={style.title}>
            {' '}
            <div className={style.mainTitle}>
              <span>UZ</span> <div>IT</div>{' '}
            </div>{' '}
            <p>GROUP</p>{' '}
          </h1>
        </Reveal>
        <Reveal delay="8.8">
          <p className={style.subtitle}>{t('main.main-text')}</p>
        </Reveal>
        <div className="mt-[50px]">
          {/* <Button width={280} height={71} font={25}>
            Подробнее
          </Button> */}

          <Button width={291} height={71} font={25}>
            {t('main.button')}
          </Button>
        </div>
      </div>
      <Sphere />
      {/* <Sphere2 /> */}
    </div>
  );
}
