import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const AppInitializer = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "fr";
    const savedDir =
      localStorage.getItem("direction") || (savedLang === "ar" ? "rtl" : "ltr");

    i18n.changeLanguage(savedLang);
    document.documentElement.lang = savedLang;
    document.documentElement.dir = savedDir;
  }, [i18n]);

  return null;
};

export default AppInitializer;
