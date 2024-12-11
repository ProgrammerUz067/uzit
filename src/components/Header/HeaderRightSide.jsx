import React from 'react';
import style from './Header.module.scss';
import ToggleTheme from './ToggleTheme';
import { useTranslation } from 'react-i18next';
import BurgerIcon from '../Burger/BurgerIcon';

export default function HeaderRightSide() {
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
  return (
    <>
      {' '}
      <div className={style.headerRight}>
        {/* <button onClick={() => changeLanguage('ru')}>ru</button>
        <button onClick={() => changeLanguage('en')}>ru</button> */}

        <div className="relative mr-[30px] xl:mr-[60px]">
          <div onClick={handlePopup} className="flex items-center">
            <span className="text-[18px] font-normal cursor-pointer">{selectLanguage}</span>
            <img src="./handle-button.png" alt="" />
          </div>

          {isPopup && (
            <div className={style.popup}>
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

        {/* <div>
          <ToggleTheme />
        </div> */}
        <div className={style.share}>
          <img src="./share.png" alt="" />
          <div className={style.shareContent}>
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
          </div>
        </div>
      </div>
    </>
  );
}
