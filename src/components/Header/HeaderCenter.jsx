import React from "react";
import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";

export default function HeaderCenter() {
  const { t } = useTranslation();

  return (
    <div>
      {/* Header center */}
      <ul className="flex items-center">
        <a href="#home">
          <li>{t("header.links1")}</li>
        </a>
        <a href="#about">
          <li>{t("header.links2")}</li>
        </a>
        <a href="#courses">
          <li>{t("header.links3")}</li>
        </a>
        <a href="#contacts">
          <li>{t("header.links4")}</li>
        </a>
      </ul>
    </div>
  );
}
