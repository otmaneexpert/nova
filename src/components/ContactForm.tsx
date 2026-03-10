
// import { useState } from "react";
// import { Calendar } from "@/components/ui/calendar";
// import { useTranslation } from "react-i18next";
// import { useDirection } from "@/hooks/useDirection";
// import { motion } from "framer-motion";
// import { enUS, fr, arSA, Locale } from "date-fns/locale";

// const ContactForm = () => {
//   const { t, i18n } = useTranslation();
//   const { isRTL } = useDirection();
  
//   const [date, setDate] = useState<Date | undefined>(new Date());
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     city: "",
//     message: ""
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus("idle");

//     try {
//       // محاكاة إرسال البيانات
//       await new Promise(resolve => setTimeout(resolve, 1000));
//       console.log("Form submitted:", { ...formData, date });
      
//       setSubmitStatus("success");
//       setFormData({ name: "", phone: "", city: "", message: "" });
//       setDate(new Date());
//     } catch (error) {
//       console.error("Form submission error:", error);
//       setSubmitStatus("error");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleInputChange = (field: keyof typeof formData) => (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [field]: e.target.value });
//   };
// const localeMap: Record<string, Locale> = {
//   en: enUS,
//   fr: fr,
//   ar: arSA,
// };
//   // إعداد التقويم بناءً على اللغة
//   const calendarLabels = {
//     labelPrevious: i18n.language === "ar" ? "السابق" : "Previous",
//     labelNext: i18n.language === "ar" ? "التالي" : "Next"
//   };

//   return (
//     <section id="contact" className="py-16 md:py-24 bg-primary text-white">
//       <div className="container mx-auto px-4">
//         <motion.div 
//           className="text-center mb-12"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold" style={{ direction: isRTL ? "rtl" : "ltr" }}>
//             {t("contact.title")}
//           </h2>
//           <p className="mt-4 opacity-90 max-w-2xl mx-auto" style={{ direction: isRTL ? "rtl" : "ltr" }}>
//             {t("contact.subtitle")}
//           </p>
//         </motion.div>

//         <div className="max-w-4xl mx-auto">
//           <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
//             {/* حقول النموذج */}
//             <motion.div 
//               className="space-y-4"
//               initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.1 }}
//             >
//               <div>
//                 <label htmlFor="name" className="sr-only">
//                   {t("contact.form.name.label")}
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   placeholder={t("contact.form.name.placeholder")}
//                   className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-secondary transition-colors"
//                   value={formData.name}
//                   onChange={handleInputChange("name")}
//                   required
//                   dir={isRTL ? "rtl" : "ltr"}
//                   style={{ textAlign: isRTL ? "right" : "left" }}
//                 />
//               </div>

//               <div>
//                 <label htmlFor="phone" className="sr-only">
//                   {t("contact.form.phone.label")}
//                 </label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   placeholder={t("contact.form.phone.placeholder")}
//                   className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-secondary transition-colors"
//                   value={formData.phone}
//                   onChange={handleInputChange("phone")}
//                   required
//                   dir={isRTL ? "rtl" : "ltr"}
//                   style={{ textAlign: isRTL ? "right" : "left" }}
//                 />
//               </div>

//               <div>
//                 <label htmlFor="city" className="sr-only">
//                   {t("contact.form.city.label")}
//                 </label>
//                 <input
//                   type="text"
//                   id="city"
//                   placeholder={t("contact.form.city.placeholder")}
//                   className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-secondary transition-colors"
//                   value={formData.city}
//                   onChange={handleInputChange("city")}
//                   required
//                   dir={isRTL ? "rtl" : "ltr"}
//                   style={{ textAlign: isRTL ? "right" : "left" }}
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="sr-only">
//                   {t("contact.form.message.label")}
//                 </label>
//                 <textarea
//                   id="message"
//                   placeholder={t("contact.form.message.placeholder")}
//                   rows={4}
//                   className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-secondary transition-colors resize-none"
//                   value={formData.message}
//                   onChange={handleInputChange("message")}
//                   dir={isRTL ? "rtl" : "ltr"}
//                   style={{ textAlign: isRTL ? "right" : "left" }}
//                 />
//               </div>
//             </motion.div>

//             {/* التقويم ومعلومات إضافية */}
//             <motion.div 
//               className="flex flex-col items-center"
//               initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.2 }}
//             >
//               <div className="w-full">
//                 <h3 className="text-lg font-semibold mb-3 text-white/90" style={{ direction: isRTL ? "rtl" : "ltr" }}>
//                   {t("contact.form.date.label")}
//                 </h3>
                
//                 <motion.div 
//                   className="bg-white rounded-lg p-2 shadow-lg"
//                   whileHover={{ scale: 1.02 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   <Calendar
//                     mode="single"
//                     selected={date}
//                     onSelect={setDate}
//                     className={`rounded-md ${isRTL ? "rtl-calendar" : ""}`}
//                     classNames={{
//                       months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
//                       month: "space-y-4",
//                       caption: "flex justify-center pt-1 relative items-center",
//                       caption_label: "text-sm font-medium",
//                       nav: "space-x-1 flex items-center",
//                       nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
//                       nav_button_previous: "absolute left-1",
//                       nav_button_next: "absolute right-1",
//                       table: "w-full border-collapse space-y-1",
//                       head_row: "flex",
//                       head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
//                       row: "flex w-full mt-2",
//                       cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
//                       day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
//                       day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
//                       day_today: "bg-accent text-accent-foreground",
//                       day_outside: "text-muted-foreground opacity-50",
//                       day_disabled: "text-muted-foreground opacity-50",
//                       day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
//                       day_hidden: "invisible",
//                     }}
//                     style={{ direction: isRTL ? "rtl" : "ltr" }}
//                     locale={localeMap[i18n.language] ?? enUS}
//                   />
//                 </motion.div>

//                 {/* معلومات الاتصال */}
//                 <motion.div 
//                   className="mt-6 bg-white/10 rounded-xl p-4 backdrop-blur-sm"
//                   initial={{ opacity: 0, y: 10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.3 }}
//                 >
//                   <h4 className="font-semibold mb-2 text-secondary" style={{ direction: isRTL ? "rtl" : "ltr" }}>
//                     {isRTL ? "معلومات الاتصال" : "Informations de contact"}
//                   </h4>
//                   <ul className="space-y-2 text-sm text-white/80">
//                     <li className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
//                       <span>📞</span>
//                       <span>+212 6 65 61 13 76</span>
//                     </li>
//                     <li className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
//                       <span>✉️</span>
//                       <span>contact@novaautoexpertise.ma</span>
//                     </li>
//                     <li className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
//                       <span>🕒</span>
//                       <span>{isRTL ? "متاح 24/7" : "Disponible 24/7"}</span>
//                     </li>
//                   </ul>
//                 </motion.div>
//               </div>

//               {/* زر الإرسال وحالة التقديم */}
//               <div className="w-full mt-6 space-y-4">
//                 <motion.button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className={`w-full bg-secondary hover:bg-secondary/90 text-white font-semibold py-3 px-8 rounded-full transition-colors flex items-center justify-center gap-2 ${
//                     isSubmitting ? "opacity-70 cursor-not-allowed" : ""
//                   }`}
//                   whileHover={!isSubmitting ? { scale: 1.02 } : {}}
//                   whileTap={!isSubmitting ? { scale: 0.98 } : {}}
//                   style={{ direction: isRTL ? "rtl" : "ltr" }}
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <motion.div
//                         animate={{ rotate: 360 }}
//                         transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//                         className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
//                       />
//                       {isRTL ? "جاري الإرسال..." : "Envoi en cours..."}
//                     </>
//                   ) : (
//                     t("contact.form.submit")
//                   )}
//                 </motion.button>

//                 {/* رسالة الحالة */}
//                 {submitStatus === "success" && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="bg-green-500/20 text-green-300 text-sm p-3 rounded-lg text-center border border-green-500/30"
//                     style={{ direction: isRTL ? "rtl" : "ltr" }}
//                   >
//                     ✅ {t("contact.form.success")}
//                   </motion.div>
//                 )}

//                 {submitStatus === "error" && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="bg-red-500/20 text-red-300 text-sm p-3 rounded-lg text-center border border-red-500/30"
//                     style={{ direction: isRTL ? "rtl" : "ltr" }}
//                   >
//                     ❌ {t("contact.form.error")}
//                   </motion.div>
//                 )}
//               </div>
//             </motion.div>
//           </form>

//           {/* معلومات إضافية */}
//           <motion.div 
//             className="mt-12 text-center text-white/70 text-sm"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.4 }}
//           >
//             <p style={{ direction: isRTL ? "rtl" : "ltr" }}>
//               {isRTL 
//                 ? "سنقوم بالاتصال بك خلال 30 دقيقة لتأكيد الموعد. يمكنك أيضًا الاتصال بنا مباشرة على الرقم أعلاه."
//                 : "Nous vous contacterons dans les 30 minutes pour confirmer le rendez-vous. Vous pouvez également nous appeler directement au numéro ci-dessus."
//               }
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactForm;
import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useDirection } from "@/hooks/useDirection";
import emailjs from "@emailjs/browser";

// تهيئة EmailJS (يمكنك إضافة هذه القيم في ملف .env)
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactForm = () => {
  const { t, i18n } = useTranslation();
  const { isRTL } = useDirection();
  
  const [date, setDate] = useState<string>("");
  const [selectedPack, setSelectedPack] = useState<string>("standard");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  
  // استخدام useRef للنموذج
  const formRef = useRef<HTMLFormElement>(null);

  // تعريف الباقات المتاحة
  const packs = [
    { id: "basic", name: t("pricing.packs.basic.name") },
    { id: "premium", name: t("pricing.packs.premium.name") }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // التأكد من تهيئة EmailJS
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        throw new Error("EmailJS configuration is missing");
      }

      // التأكد من وجود ref للنموذج
      if (!formRef.current) {
        throw new Error("Form reference is not available");
      }

      // إرسال النموذج باستخدام EmailJS
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      console.log("EmailJS response:", result.text);
      
      setSubmitStatus("success");
      
      // إعادة تعيين الحقول
      setFormData({ name: "", phone: "", city: "", message: "" });
      setDate("");
      setSelectedPack("standard");
      
    } catch (error) {
      console.error("EmailJS submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof typeof formData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  // الحصول على تاريخ اليوم كحد أدنى
  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  // تنسيق التاريخ للعرض
  const formatDateForDisplay = (dateString: string) => {
    if (!dateString) return "";
    
    const dateObj = new Date(dateString);
    return dateObj.toLocaleDateString(i18n.language, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // الحصول على سعر الباقة المحددة
  const getPackPrice = (packId: string) => {
    switch(packId) {
      case "basic": return 350;
      case "premium": return 500;
      default: return 350;
    }
  };

  // الحصول على اسم الباقة
  const getPackName = (packId: string) => {
    const pack = packs.find(p => p.id === packId);
    return pack ? pack.name : "";
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ direction: isRTL ? "rtl" : "ltr" }}>
            {t("contact.title")}
          </h2>
          <p className="mt-4 opacity-90 max-w-2xl mx-auto" style={{ direction: isRTL ? "rtl" : "ltr" }}>
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form 
            ref={formRef} 
            onSubmit={handleSubmit} 
            className="grid md:grid-cols-2 gap-8"
          >
            {/* حقول مخفية لإرسال البيانات إلى EmailJS */}
            <input 
              type="hidden" 
              name="pack_name" 
              value={getPackName(selectedPack)} 
            />
            <input 
              type="hidden" 
              name="pack_price" 
              value={`${getPackPrice(selectedPack)} ${t("pricing.pack.currency")}`} 
            />
            <input 
              type="hidden" 
              name="formatted_date" 
              value={date ? formatDateForDisplay(date) : ""} 
            />
            <input 
              type="hidden" 
              name="language" 
              value={i18n.language} 
            />
            <input 
              type="hidden" 
              name="direction" 
              value={isRTL ? "rtl" : "ltr"} 
            />

            {/* حقول النموذج */}
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">
                  {t("contact.form.name.label")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name" // مطلوب لـ EmailJS
                  placeholder={t("contact.form.name.placeholder")}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-secondary transition-colors"
                  value={formData.name}
                  onChange={handleInputChange("name")}
                  required
                  dir={isRTL ? "rtl" : "ltr"}
                  style={{ textAlign: isRTL ? "right" : "left" }}
                />
              </div>

              <div>
                <label htmlFor="phone" className="sr-only">
                  {t("contact.form.phone.label")}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="user_phone" // مطلوب لـ EmailJS
                  placeholder={t("contact.form.phone.placeholder")}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-secondary transition-colors"
                  value={formData.phone}
                  onChange={handleInputChange("phone")}
                  required
                  dir={isRTL ? "rtl" : "ltr"}
                  style={{ textAlign: isRTL ? "right" : "left" }}
                />
              </div>

              <div>
                <label htmlFor="city" className="sr-only">
                  {t("contact.form.city.label")}
                </label>
                <input
                  type="text"
                  id="city"
                  name="user_city" // مطلوب لـ EmailJS
                  placeholder={t("contact.form.city.placeholder")}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-secondary transition-colors"
                  value={formData.city}
                  onChange={handleInputChange("city")}
                  required
                  dir={isRTL ? "rtl" : "ltr"}
                  style={{ textAlign: isRTL ? "right" : "left" }}
                />
              </div>

              {/* Dropdown لاختيار الباقة */}
              <div>
                <label htmlFor="pack" className="block mb-2 text-sm font-medium text-white/80">
                  {isRTL ? "اختر الباقة" : "Choisissez le pack"}
                </label>
                <select
                  id="pack"
                  name="selected_pack" // مطلوب لـ EmailJS
                  value={selectedPack}
                  onChange={(e) => setSelectedPack(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-secondary transition-colors"
                  dir={isRTL ? "rtl" : "ltr"}
                  style={{ textAlign: isRTL ? "right" : "left" }}
                  required
                >
                  {packs.map((pack) => (
                    <option key={pack.id} value={pack.id} className="bg-primary text-white">
                      {pack.name} - {getPackPrice(pack.id)} {t("pricing.pack.currency")}
                    </option>
                  ))}
                </select>
              </div>

              {/* حقل التاريخ */}
              <div>
                <label htmlFor="date" className="sr-only">
                  {t("contact.form.date.label")}
                </label>
                <input
                  type="date"
                  id="date"
                  name="event_date" // مطلوب لـ EmailJS
                  min={getTodayDate()}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-secondary transition-colors"
                  value={date || getTodayDate()}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  dir={isRTL ? "rtl" : "ltr"}
                  style={{ textAlign: isRTL ? "right" : "left" }}
                />
                {date && (
                  <p className="mt-2 text-sm text-white/70">
                    {isRTL ? "التاريخ المحدد:" : "Date sélectionnée:"} {formatDateForDisplay(date)}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="sr-only">
                  {t("contact.form.message.label")}
                </label>
                <textarea
                  id="message"
                  name="user_message" // مطلوب لـ EmailJS
                  placeholder={t("contact.form.message.placeholder")}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-secondary transition-colors resize-none"
                  value={formData.message}
                  onChange={handleInputChange("message")}
                  dir={isRTL ? "rtl" : "ltr"}
                  style={{ textAlign: isRTL ? "right" : "left" }}
                />
              </div>
            </div>

            {/* معلومات الإرسال والتأكيد */}
            <div className="flex flex-col items-center">
              {/* زر الإرسال وحالة التقديم */}
              <div className="w-full mt-6 space-y-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-secondary hover:bg-secondary/90 text-white font-semibold py-3 px-8 rounded-full transition-colors flex items-center justify-center gap-2 ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                  style={{ direction: isRTL ? "rtl" : "ltr" }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      {isRTL ? "جاري الإرسال..." : "Envoi en cours..."}
                    </>
                  ) : (
                    <>
                      {isRTL ? "احجز الآن" : "Réserver maintenant"} - {getPackPrice(selectedPack)} {t("pricing.pack.currency")}
                    </>
                  )}
                </button>

                {/* رسالة الحالة */}
                {submitStatus === "success" && (
                  <div className="bg-green-500/20 text-green-300 text-sm p-3 rounded-lg text-center border border-green-500/30">
                    ✅ {t("contact.form.success") || (isRTL ? "تم إرسال طلبك بنجاح!" : "Votre demande a été envoyée avec succès!")}
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-red-500/20 text-red-300 text-sm p-3 rounded-lg text-center border border-red-500/30">
                    ❌ {t("contact.form.error") || (isRTL ? "حدث خطأ أثناء الإرسال" : "Une erreur s'est produite lors de l'envoi")}
                  </div>
                )}

                {/* رابط للاتصال المباشر */}
                <div className="text-center">
                  <a 
                    href="tel:+212665611376" 
                    className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors"
                  >
                    <span className="text-secondary">📞</span>
                    {isRTL ? " للحجز السريع، اتصل الآن:" : "Pour une réservation rapide:"}
                    <span className="font-semibold text-white" dir="ltr">+212 6 65 61 13 76</span>
                  </a>
                </div>
              </div>
            </div>
          </form>

          {/* معلومات إضافية */}
          <div className="mt-12 text-center text-white/70 text-sm">
            <p style={{ direction: isRTL ? "rtl" : "ltr" }}>
              {isRTL 
                ? "نعمل من الإثنين إلى الأحد، من الساعة 8 صباحاً حتى 8 مساءً. نضمن الرد على جميع الاستفسارات خلال 30 دقيقة."
                : "Nous travaillons du lundi au dimanche, de 8h à 20h. Nous garantissons une réponse à toutes les demandes dans les 30 minutes."
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;