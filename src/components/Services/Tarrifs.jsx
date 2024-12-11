import React from 'react';
import styles from './Services.module.scss';
import { tariffsItem } from './data.js';
import Button from '../Button/Button.jsx';
import { Link } from 'react-router-dom';

export default function Tarrifs({ title, description, img, aos, delay }) {
  const combinedArray = description.map((item, index) => ({
    desc: item,
    imgArray: img[index],
  }));
  console.log(description);

  return (
    <>
      <div
        data-aos={aos}
        data-aos-delay={delay}
        data-aos-duration="500"
        className={styles.tarrifsItem}>
        <div className={styles.tarrifsItemTitle}>
          <h2>{title}</h2>
        </div>
        <div className={styles.tarrifsBlock}>
          <div className={styles.tarrifsFirst}>
            {' '}
            {combinedArray.map((item) => (
              <div className="flex items-center mt-[5px] pl-[15px]">
                <img src={item?.imgArray?.img} alt="img" />

                <span className="text-[18px] opacity-[80%] ml-[5px] font-medium">
                  {item.desc.description}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-auto">
            {' '}
            {/* <Link to="tarrifs">
          
            </Link> */}
            <button>Подробнее</button>
          </div>
        </div>
      </div>
    </>
  );
}
