// import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

// const SocialSection = () => {
//   return (
//     <section className="py-16 md:py-24 bg-muted/30">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="section-title">
//             Suivez-nous sur <span>les réseaux</span>
//           </h2>
//           <div className="section-divider">
//             <div className="w-3 h-3 bg-secondary rotate-45" />
//           </div>
//           <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
//             Découvrez nos interventions, avis clients et conseils auto en nous suivant sur nos réseaux sociaux.
//           </p>
//         </div>

//         <div className="flex justify-center gap-6">
//           <a
//             href="https://www.facebook.com/5abir.ma/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors"
//           >
//             <FaFacebookF size={24} />
//           </a>
//           <a
//             href="https://www.instagram.com/5abir.ma/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-14 h-14 bg-gradient-to-br from-[hsl(280,67%,51%)] via-[hsl(330,81%,60%)] to-[hsl(30,94%,54%)] text-primary-foreground rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
//           >
//             <FaInstagram size={24} />
//           </a>
//           <a
//             href="https://www.youtube.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-14 h-14 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center hover:bg-destructive/90 transition-colors"
//           >
//             <FaYoutube size={24} />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SocialSection;
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useDirection } from "@/hooks/useDirection";

const SocialSection = () => {
  const { t } = useTranslation();
  const { isRTL } = useDirection();

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title" style={{ direction: isRTL ? "rtl" : "ltr" }}>
            {t("social.title")}
          </h2>
          <div className="section-divider">
            <div className="w-3 h-3 bg-secondary rotate-45" />
          </div>
          <p 
            className="text-muted-foreground mt-4 max-w-2xl mx-auto"
            style={{ direction: isRTL ? "rtl" : "ltr" }}
          >
            {t("social.subtitle")}
          </p>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://www.facebook.com/profile.php?id=10007767405908"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://www.instagram.com/nova_auto_expertise"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-gradient-to-br from-[hsl(280,67%,51%)] via-[hsl(330,81%,60%)] to-[hsl(30,94%,54%)] text-primary-foreground rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center hover:bg-destructive/90 transition-colors"
          >
            <FaYoutube size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;