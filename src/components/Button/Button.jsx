import React from 'react';
import style from './Button.module.scss';

export default function Button({ children, width, height, font, ...props }) {
  const buttonStyle = {
    position: 'relative',
    display: 'flex',
    outline: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    height: height,
    border: '1px solid #6B8C49',
    fontWeight: '700',
    fontSize: font,
    textAlign: 'center',
    color: 'white',
  };

  return (
    <button {...props} style={buttonStyle} className={style['btn-5']}>
      {children}
    </button>
  );
}
