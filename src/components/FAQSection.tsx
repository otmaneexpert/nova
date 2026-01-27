// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";

// const faqs = [
//   {
//     question: "Le diagnostic se fait-il sur place ou en garage ?",
//     answer: "Le diagnostic se fait directement sur le lieu de votre choix : à domicile, au travail ou chez le vendeur."
//   },
//   {
//     question: "Combien de temps dure le diagnostic ?",
//     answer: "Le diagnostic prend en moyenne entre 45 minutes et 1 heure, selon l'état du véhicule et les éléments à inspecter."
//   },
//   {
//     question: "Est-ce que je reçois un rapport écrit ?",
//     answer: "Oui, vous recevez un rapport clair et complet avec des recommandations pour vous aider à prendre une décision d'achat."
//   },
//   {
//     question: "Que couvre exactement le diagnostic de Nova ?",
//     answer: "Notre diagnostic couvre les points essentiels du véhicule : mécanique, carrosserie, châssis, électronique de base et historique visible du véhicule."
//   },
//   {
//     question: "Quand dois-je réserver mon rendez-vous ?",
//     answer: "Pour garantir la disponibilité de nos experts, il est recommandé de réserver au moins une journée à l'avance."
//   }
// ];

// const FAQSection = () => {
//   return (
//     <section className="py-16 md:py-24 bg-background">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="section-title">
//             Questions <span>fréquentes</span>
//           </h2>
//           <div className="section-divider">
//             <div className="w-3 h-3 bg-secondary rotate-45" />
//           </div>
//           <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
//             Voici les réponses aux questions que nos clients se posent souvent avant de réserver un diagnostic automobile avec <strong>Nova</strong>.
//           </p>
//         </div>

//         <div className="max-w-3xl mx-auto">
//           <Accordion type="single" collapsible className="space-y-4">
//             {faqs.map((faq, index) => (
//               <AccordionItem
//                 key={index}
//                 value={`item-${index}`}
//                 className="bg-card border border-border rounded-lg px-6"
//               >
//                 <AccordionTrigger className="text-left font-semibold hover:text-secondary">
//                   {faq.question}
//                 </AccordionTrigger>
//                 <AccordionContent className="text-muted-foreground">
//                   {faq.answer}
//                 </AccordionContent>
//               </AccordionItem>
//             ))}
//           </Accordion>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQSection;
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";
import { useDirection } from "@/hooks/useDirection";

const FAQSection = () => {
  const { t } = useTranslation();
  const { isRTL } = useDirection();

  const faqs = t("faq.items", { returnObjects: true }) as Array<{
    question: string;
    answer: string;
  }>;

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title" style={{ direction: isRTL ? "rtl" : "ltr" }}>
            {t("faq.title")}
          </h2>
          <div className="section-divider">
            <div className="w-3 h-3 bg-secondary rotate-45" />
          </div>
          <p 
            className="text-muted-foreground mt-4 max-w-2xl mx-auto"
            style={{ direction: isRTL ? "rtl" : "ltr" }}
          >
            {t("faq.subtitle")}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
                dir={isRTL ? "rtl" : "ltr"}
              >
                <AccordionTrigger 
                  className={`text-left font-semibold hover:text-secondary ${isRTL ? "text-right" : "text-left"}`}
                  style={{ textAlign: isRTL ? "right" : "left" }}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent 
                  className="text-muted-foreground"
                  style={{ textAlign: isRTL ? "right" : "left" }}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;