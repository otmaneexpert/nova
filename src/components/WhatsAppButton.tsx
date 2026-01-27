import { useDirection } from "@/hooks/useDirection";

const WhatsAppButton = () => {
  const { isRTL } = useDirection();

  return (
    <a
      href="https://wa.me/212600000000"
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
      `}
      aria-label="WhatsApp"
    >
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
      <svg
        viewBox="0 0 32 32"
        className="w-7 h-7 fill-white"
      >
        <path d="M19.11 17.83c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.35-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.97 2.63 1.11 2.82c.14.18 1.91 2.91 4.63 4.08.65.28 1.16.45 1.55.58.65.21 1.24.18 1.7.11.52-.08 1.6-.65 1.82-1.28.22-.63.22-1.17.16-1.28-.07-.11-.25-.18-.52-.32zM16.04 2.67C8.83 2.67 3 8.49 3 15.7c0 2.53.66 4.92 1.91 7.03L3 29l6.47-1.87c2.02 1.1 4.32 1.73 6.57 1.73 7.21 0 13.04-5.83 13.04-13.04 0-7.21-5.83-13.04-13.04-13.04zm0 23.5c-2.07 0-4.1-.55-5.88-1.6l-.42-.25-3.84 1.11 1.12-3.74-.27-.44c-1.14-1.83-1.75-3.94-1.75-6.1 0-6.36 5.17-11.54 11.54-11.54 6.36 0 11.54 5.17 11.54 11.54 0 6.36-5.17 11.54-11.54 11.54z"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;
