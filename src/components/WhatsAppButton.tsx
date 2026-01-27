import { FaWhatsapp } from "react-icons/fa";
import { useDirection } from "@/hooks/useDirection";

const WhatsAppButton = () => {
  const { isRTL } = useDirection();

  return (
    <a
      href="https://wa.me/212665611376"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 z-50
        w-14 h-14 rounded-full
        bg-green-500 text-white
        flex items-center justify-center
        shadow-lg
        hover:bg-green-600
        transition-all duration-300
        hover:scale-110
        ${isRTL ? "left-6" : "right-6"}
        relative
      `}
      aria-label="WhatsApp"
    >
      {/* 🔴 Badge */}
      <span
        className={`absolute -top-1
          ${isRTL ? "-left-1" : "-right-1"}
          w-5 h-5
          bg-red-500 text-white
          text-xs font-bold
          rounded-full
          flex items-center justify-center
          shadow
        `}
      >
        1
      </span>

      {/* WhatsApp Icon */}
      <FaWhatsapp className="w-7 h-7 text-white" />
    </a>
  );
};

export default WhatsAppButton;
