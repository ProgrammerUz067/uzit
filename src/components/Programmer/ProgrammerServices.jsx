import React from 'react';
import style from './Programmer.module.scss';
import Button from '../Button/Button';

export default function ProgrammerServices({ title, description, img }) {
  return (
    <div className={style.programmerItem}>
      <img src={img} alt="" />
      <h2 className="mt-[15px] text-[29px] font-medium pb-4">{title}</h2>
      <span className="text-[18px] font-medium mt-2">{description}</span>
    </div>
  );
}
