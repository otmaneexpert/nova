// import { useState } from "react";
// import { Menu, X, ChevronDown } from "lucide-react";
// import logo from "@/assets/logo.png"
// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navItems = [
//     { label: "ACCUEIL", href: "#", active: true },
//     { label: "RÉSERVER VOTRE EXPERT", href: "#contact" },
//     { label: "NOS SERVICES", href: "#services" },
//     { label: "CONSEILS AUTO", href: "#conseils" },
//   ];

//   return (
//     <header className="bg-background shadow-sm sticky top-0 z-50">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center py-4">
//           {/* Logo */}
//           <a href="/" className="flex items-center gap-2">
//   <div className="flex items-center">
//     <img
//       src={logo}
//       alt="5ABIR.MA Logo"
//       className="w-10 h-10 object-contain"
//     />
//     <span className="ml-2 text-2xl font-bold">
//       <span className="text-primary">NOVA</span>
//     </span>
//   </div>
// </a>


//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center gap-8">
//             {navItems.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 className={`text-sm font-medium transition-colors hover:text-secondary ${
//                   item.active ? "text-secondary" : "text-foreground"
//                 }`}
//               >
//                 {item.label}
//               </a>
//             ))}
//             <div className="flex items-center gap-1 cursor-pointer text-sm font-medium text-foreground hover:text-secondary transition-colors">
//               <span>🇫🇷</span>
//               <span>FRANÇAIS</span>
//               <ChevronDown size={14} />
//             </div>
//           </nav>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden p-2"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <nav className="lg:hidden py-4 border-t">
//             {navItems.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 className={`block py-3 text-sm font-medium ${
//                   item.active ? "text-secondary" : "text-foreground"
//                 }`}
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {item.label}
//               </a>
//             ))}
//           </nav>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    { label: t("nav.home"), href: "#", active: true },
    { label: t("nav.reserve"), href: "#contact" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.advice"), href: "#conseils" },
  ];

  return (
    <header className="bg-background shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <img
                src={logo}
                alt="NOVA Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="ml-2 text-2xl font-bold">
                <span className="text-primary">NOVA</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-secondary ${
                  item.active ? "text-secondary" : "text-foreground"
                }`}
              >
                {item.label}
              </a>
            ))}
            <LanguageSwitcher />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`block py-3 text-sm font-medium ${
                  item.active ? "text-secondary" : "text-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="py-3">
              <LanguageSwitcher />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;