import React from "react";
import style from "./About.module.scss";
import { useTranslation } from "react-i18next";
import Reveal from "../Reveal/Reveal";
import about from "../../../public/about.png";
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function About() {
  const { t } = useTranslation();
  const imgRef = React.useRef(null);
  // React.useEffect(() => {
  //   const element = imgRef.current;
  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.to(element, {
  //     x: 700,
  //     duration: 2,
  //     scrollTrigger: element,
  //   });
  // }, []);

  return (
    <section id="about" className={style.about1}>
      <div className={style.about}>
        <div>
          <img src={about} alt="about" />
        </div>

        <div>
          <h1 className={style.title}>{t("about.title")}</h1>
          <p>{t("about.subtitle")}</p>
        </div>
      </div>
    </section>
  );
}
