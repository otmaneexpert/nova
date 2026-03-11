import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  type Direction = "rtl" | "ltr";

  type Language = {
    code: string;
    name: string;
    flag: string;
    dir: Direction;
  };
  const languages: Language[] = [
    { code: "fr", name: "Français", flag: "🇫🇷", dir: "ltr" },
    { code: "ar", name: "العربية", flag: "🇲🇦", dir: "rtl" },
  ];



  const currentLang =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  const changeLanguage = (lng: string, dir: "rtl" | "ltr") => {
    i18n.changeLanguage(lng);

    // ✅ حفظ في localStorage
    localStorage.setItem("language", lng);
    localStorage.setItem("direction", dir);

    // ✅ تحديث الصفحة
    document.documentElement.lang = lng;
    document.documentElement.dir = dir;

    setIsOpen(false);
  };

  return (
    <div className="relative" >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm font-medium hover:text-secondary transition-colors"
      >
        <span>{currentLang.flag}</span>
        <span>{currentLang.name}</span>
        <ChevronDown size={14} />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-card border border-border rounded-lg shadow-lg z-50 min-w-[140px]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code, lang.dir)}
              className={`w-full text-left px-4 py-2 hover:bg-muted transition-colors ${
                currentLang.code === lang.code ? "bg-muted" : ""
              }`}
            >
              <span className="mr-2">{lang.flag}</span>
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
