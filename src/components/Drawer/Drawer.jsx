import React from 'react';
import styles from './Drawer.module.scss';
import { useTranslation } from 'react-i18next';
import HeaderRightSide from '../Header/HeaderRightSide';

export default function Drawer({ openBurger, setOpenBurger }) {
  const { t, i18n } = useTranslation();
  const [isPopup, setIsPopup] = React.useState(false);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setIsPopup(false);
  };
  const languageSelect = [
    {
      id: 1,
      language: 'RU',
      img: './russian.png',
      switch: 'ru',
    },
    {
      id: 2,
      language: 'UZ',
      img: './uzbekistan.png',
      switch: 'uz',
    },
    {
      id: 3,
      language: 'EN',
      img: './usa.png',
      switch: 'en',
    },
  ];
  const [selectLanguage, setSelectLanguage] = React.useState('RU');
  console.log(selectLanguage);
  // React.useState(() => {

  //     const data = JSON.parse(localStorage.getItem('language'));
  //     setSelectLanguage(data);

  // }, []);

  // React.useEffect(() => {
  //   localStorage.setItem('language', JSON.stringify(selectLanguage));
  // }, [selectLanguage]);

  function handlePopup() {
    setIsPopup(!isPopup);
  }
  // const { t } = useTranslation();
  React.useEffect(() => {
    if (openBurger) {
      window.document.body.style.overflow = 'hidden';
    } else {
      window.document.body.style.overflow = '';
    }
  }, [openBurger]);
  return (
    <div className={`${styles.drawer} ${openBurger ? styles.active : ''}`}>
      {/* languages */}
      <div className="relative mr-[30px] xl:mr-[60px]">
        <div className="flex items-center">
          <span onClick={handlePopup} className="text-[18px] mt-[15px] font-normal cursor-pointer">
            {selectLanguage}
          </span>
          <img className="mt-[15px]" src="./handle-button.png" alt="" />
        </div>

        {isPopup && (
          <div className={styles.popup}>
            {languageSelect.map((item) => (
              <div key={item.id} className="w-fit h-fit pr-[20px] pt-[5px]">
                <ul className="flex items-start" onClick={() => setSelectLanguage(item.language)}>
                  <li onClick={() => changeLanguage(item.switch)}>{item.language}</li>
                  <img className="ml-[5px]" src={item.img} alt="" />
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
      <img className={styles['background-img']} src="./Drawer-logo.png" alt="logo" />
      <div className={styles.drawerLinks}>
        <ul className="flex width-[200px] flex-col h-fit m-auto z-10 gap-4">
          <a onClick={() => setOpenBurger(!openBurger)} href="#about">
            <li>{t('header.links1')}</li>
          </a>
          <a onClick={() => setOpenBurger(!openBurger)} href="#team">
            <li>{t('header.links2')}</li>
          </a>
          <a onClick={() => setOpenBurger(!openBurger)} href="#services">
            <li>{t('header.links3')}</li>
          </a>
          <a onClick={() => setOpenBurger(!openBurger)} href="#projects">
            <li>{t('header.links4')}</li>
          </a>
          <a onClick={() => setOpenBurger(!openBurger)} href="#questions">
            <li>{t('header.links5')}</li>
          </a>
          <a onClick={() => setOpenBurger(!openBurger)} href="#contacts">
            <li>{t('header.links6')}</li>
          </a>
        </ul>
      </div>
      <div className={styles.drawerSocial}>
        <a href="#facebook">
          <img src="./facebook.png" alt="socials-icons" />
        </a>
        <a href="#instagram">
          {' '}
          <img src="./instagram.png" alt="socials-icons" />
        </a>
        <a href="#linkedIn">
          {' '}
          <img src="./linkedIn.png" alt="socials-icons" />
        </a>
        <a href="#telegram">
          {' '}
          <img src="./telegram.png" alt="socials-icons" />
        </a>
      </div>
      {/* <HeaderRightSide /> */}
    </div>
  );
}
