import React from 'react';
import style from './Projects.module.scss';
import Slider from './Slider';

export default function Projects() {
  const [images, setImages] = React.useState(['./Projects/1.png', './Projects/2.png']);
  return (
    <div className={style.projects}>
      <h2 className="text-[44px] font-bold text-center lg:text-[80px] md:text-[60px] sm:text-[44px]">
        Что мы уже сделали
      </h2>
      <Slider images={images} />
    </div>
  );
}
