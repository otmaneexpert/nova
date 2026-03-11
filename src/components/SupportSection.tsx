// import { MessageCircle } from "lucide-react";

// const supportStats = [
//   { value: "97%", label: "de taux de satisfaction" },
//   { value: "24/7", label: "disponible" },
//   { value: "12-24h", label: "de temps de réponse en moyenne" }
// ];

// const SupportSection = () => {
//   return (
//     <section className="py-16 md:py-24 bg-primary text-white">
//       <div className="container mx-auto px-4">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Tu as des questions ?
//               <br />
//               Nous sommes là pour t'aider
//               <br />
//               24 h/24 et 7 j/7
//             </h2>
//             <p className="opacity-90 mb-6">
//               Obtiens les réponses dont tu as besoin, quand tu en as besoin.
//             </p>
//             <a
//               href="https://wa.me/212640051774"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-3 rounded-full transition-colors"
//             >
//               <MessageCircle className="w-5 h-5" />
//               Envoie-nous un message
//             </a>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//             {supportStats.map((stat, index) => (
//               <div key={index} className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
//                 <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
//                   {stat.value}
//                 </div>
//                 <p className="text-sm opacity-90">{stat.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SupportSection;
import { MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useDirection } from "@/hooks/useDirection";

const SupportSection = () => {
  const { t } = useTranslation();
  const { isRTL } = useDirection();

  const supportStats = t("support.stats", { returnObjects: true }) as Array<{
    value: string;
    label: string;
  }>;

  return (
    <section className="py-16 md:py-24 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div style={{ direction: isRTL ? "rtl" : "ltr" }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("support.title")}
            </h2>
            <p className="opacity-90 mb-6">
              {t("support.subtitle")}
            </p>
            <a
              href="https://wa.me/212665611376"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-3 rounded-full transition-colors"
              style={{ direction: isRTL ? "rtl" : "ltr" }}
            >
              <MessageCircle className="w-5 h-5" />
              {t("support.button")}
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {supportStats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm"
                style={{ direction: isRTL ? "rtl" : "ltr" }}
              >
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                  {stat.value}
                </div>
                <p className="text-sm opacity-90" style={{ textAlign: isRTL ? "right" : "center" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;