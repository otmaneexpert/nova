// import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
// import { Phone, Mail, MapPin } from "lucide-react";
// import logo from "@/assets/logo.png" 

// const Footer = () => {
//   return (
//     <footer className="bg-primary text-white">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Logo & Description */}
//           <div className="md:col-span-2">
//             <div className="flex items-center gap-2 mb-4">
//           <a href="/" className="flex items-center gap-2">
//   <div className="flex items-center">
// {/* Circle blanche */}
//     <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-sm">
//       <img
//         src={logo}
//         alt="NOVA Logo"
//         className="w-7 h-7 object-contain"
//       />
//     </div>
//     <span className="ml-2 text-2xl font-bold">
//       <span className="text-secondary">NOVA</span>
//     </span>
//   </div>
// </a>
//             </div>
//             <p className="text-white/80 mb-4 max-w-md">
//               L'expertise automobile n°1 au Maroc. Service 100% mobile pour inspecter votre voiture d'occasion avant l'achat.
//             </p>
//             <div className="flex gap-4">
//               <a href="https://www.facebook.com/5abir.ma/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
//                 <FaFacebookF size={16} />
//               </a>
//               <a href="https://www.instagram.com/5abir.ma/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
//                 <FaInstagram size={16} />
//               </a>
//               <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
//                 <FaYoutube size={18} />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-bold text-lg mb-4">Liens rapides</h4>
//             <ul className="space-y-2 text-white/80">
//               <li><a href="#" className="hover:text-secondary transition-colors">Accueil</a></li>
//               <li><a href="#services" className="hover:text-secondary transition-colors">Nos Services</a></li>
//               <li><a href="#packs" className="hover:text-secondary transition-colors">Tarifs</a></li>
//               <li><a href="#contact" className="hover:text-secondary transition-colors">Contact</a></li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="font-bold text-lg mb-4">Contact</h4>
//             <ul className="space-y-3 text-white/80">
//               <li className="flex items-center gap-2">
//                 <Phone size={16} className="text-secondary" />
//                 <a href="tel:+212606141818" className="hover:text-secondary transition-colors">+212 6 65 61 13 76</a>
//               </li>
//               <li className="flex items-center gap-2">
//                 <Mail size={16} className="text-secondary" />
//                 <a href="mailto:contact@5abir.ma" className="hover:text-secondary transition-colors break-all">contact@novaautoexpertise.ma</a>
//               </li>
//               <li className="flex items-start gap-2">
//                 <MapPin size={16} className="text-secondary mt-1" />
//                 <span>Casablanca, Maroc</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60 text-sm">
//           <p>© 2025 NovaAuto - Tous droits réservés</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import { useTranslation } from "react-i18next";
import { useDirection } from "@/hooks/useDirection";

const Footer = () => {
  const { t } = useTranslation();
  const { isRTL } = useDirection();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <a href="/" className="flex items-center gap-2">
                <div className="flex items-center">
                  <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <img
                      src={logo}
                      alt="NOVA Logo"
                      className="w-7 h-7 object-contain"
                    />
                  </div>
                </div>
              </a>
            </div>
            <p className="text-white/80 mb-4 max-w-md" style={{ direction: isRTL ? "rtl" : "ltr" }}>
              {t("footer.description")}
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=100077674059083" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <FaFacebookF size={16} />
              </a>
              <a href="https://www.instagram.com/nova_auto_expertise" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <FaInstagram size={16} />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#" className="hover:text-secondary transition-colors" style={{ direction: isRTL ? "rtl" : "ltr" }}>
                  {t("footer.links.home")}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-secondary transition-colors" style={{ direction: isRTL ? "rtl" : "ltr" }}>
                  {t("footer.links.services")}
                </a>
              </li>
              <li>
                <a href="#packs" className="hover:text-secondary transition-colors" style={{ direction: isRTL ? "rtl" : "ltr" }}>
                  {t("footer.links.pricing")}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-secondary transition-colors" style={{ direction: isRTL ? "rtl" : "ltr" }}>
                  {t("footer.links.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t("footer.contact")}</h4>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-secondary" />
                <a href="tel:+212665611376" className="hover:text-secondary transition-colors" dir="ltr">
                  {t("footer.contactInfo.phone")}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-secondary" />
                <a href={`mailto:${t("footer.contactInfo.email")}`} className="hover:text-secondary transition-colors break-all" dir="ltr">
                  {t("footer.contactInfo.email")}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-secondary mt-1" />
                <span style={{ direction: isRTL ? "rtl" : "ltr" }}>{t("footer.contactInfo.address")}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60 text-sm">
          <p>{t("footer.legal.copyright")}</p>
        </div> */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60 text-sm space-y-2">
          <p>{t("footer.legal.copyright")}</p>
        
          <p>
            تم تطوير الموقع بواسطة{" "}
            <a
              href="https://wa.me/212766040155"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:underline"
            >
              Ayoub WhatsApp
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;