import React from 'react'
import style from './Header.module.scss'

export default function ToggleTheme() {
  return (
    <label for="theme" className={style.theme}>
 
    <span className={style.themeToggleWrap}>
      <input id="theme" className={style.theme__toggle} type="checkbox" role="switch" name="theme" value="dark"/>
      <span className={style.theme__fill}></span>
      <span className={style.theme__icon}>
        <span className={style.themeIconPart}></span>
        <span className={style.themeIconPart}></span>
        <span className={style.themeIconPart}></span>
        <span className={style.themeIconPart}></span>
        <span className={style.themeIconPart}></span>
        <span className={style.themeIconPart}></span>
        <span className={style.themeIconPart}></span>
        <span className={style.themeIconPart}></span>
        <span className={style.themeIconPart}></span>

      </span>
    </span>

  </label>
  )
}
