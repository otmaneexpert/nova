#!/bin/bash

# إنشاء هيكل المجلدات الرئيسية
mkdir -p public
mkdir -p src/assets
mkdir -p src/components/animations
mkdir -p src/components/ui
mkdir -p src/hooks
mkdir -p src/lib
mkdir -p src/pages
mkdir -p test

# إنشاء الملفات في مجلد public
touch public/favicon.ico
touch public/placeholder.svg
touch public/robots.txt

# إنشاء الملفات في src/assets
touch src/assets/hero-bg.jpg

# إنشاء الملفات في src/components/animations
touch src/components/animations/ScrollAnimation.tsx

# إنشاء الملفات في src/components/ui
touch src/components/ui/accordion.tsx
touch src/components/ui/alert-dialog.tsx
touch src/components/ui/alert.tsx
touch src/components/ui/aspect-ratio.tsx
touch src/components/ui/avatar.tsx
touch src/components/ui/badge.tsx
touch src/components/ui/breadcrumb.tsx
touch src/components/ui/button.tsx
touch src/components/ui/calendar.tsx
touch src/components/ui/card.tsx
touch src/components/ui/carousel.tsx
touch src/components/ui/chart.tsx
touch src/components/ui/checkbox.tsx
touch src/components/ui/collapsible.tsx
touch src/components/ui/command.tsx
touch src/components/ui/context-menu.tsx
touch src/components/ui/dialog.tsx
touch src/components/ui/drawer.tsx
touch src/components/ui/dropdown-menu.tsx
touch src/components/ui/form.tsx
touch src/components/ui/hover-card.tsx
touch src/components/ui/input-otp.tsx
touch src/components/ui/input.tsx
touch src/components/ui/label.tsx
touch src/components/ui/menubar.tsx
touch src/components/ui/navigation-menu.tsx
touch src/components/ui/pagination.tsx
touch src/components/ui/popover.tsx
touch src/components/ui/progress.tsx
touch src/components/ui/radio-group.tsx
touch src/components/ui/resizable.tsx
touch src/components/ui/scroll-area.tsx
touch src/components/ui/select.tsx
touch src/components/ui/separator.tsx
touch src/components/ui/sheet.tsx
touch src/components/ui/sidebar.tsx
touch src/components/ui/skeleton.tsx
touch src/components/ui/slider.tsx
touch src/components/ui/sonner.tsx
touch src/components/ui/switch.tsx
touch src/components/ui/table.tsx
touch src/components/ui/tabs.tsx
touch src/components/ui/textarea.tsx
touch src/components/ui/toast.tsx
touch src/components/ui/toaster.tsx
touch src/components/ui/toggle-group.tsx
touch src/components/ui/toggle.tsx
touch src/components/ui/tooltip.tsx
touch src/components/ui/use-toast.ts

# إنشاء الملفات في src/components
touch src/components/AboutSection.tsx
touch src/components/CitiesSection.tsx
touch src/components/ContactForm.tsx
touch src/components/EngagementsSection.tsx
touch src/components/FAQSection.tsx
touch src/components/Footer.tsx
touch src/components/Header.tsx
touch src/components/HeroSection.tsx
touch src/components/HowItWorksSection.tsx
touch src/components/NavLink.tsx
touch src/components/PricingSection.tsx
touch src/components/SocialSection.tsx
touch src/components/StatsSection.tsx
touch src/components/SupportSection.tsx
touch src/components/TestimonialsSection.tsx
touch src/components/TopBar.tsx
touch src/components/VideoSection.tsx

# إنشاء الملفات في src/hooks
touch src/hooks/use-mobile.tsx
touch src/hooks/use-toast.ts

# إنشاء الملفات في src/lib
touch src/lib/utils.ts

# إنشاء الملفات في src/pages
touch src/pages/Index.tsx
touch src/pages/NotFound.tsx

# إنشاء الملفات في test
touch test/example.test.ts
touch test/setup.ts

# إنشاء الملفات في الجذر
touch src/App.css
touch src/App.tsx
touch src/index.css
touch src/main.tsx
touch src/vite-env.d.ts

touch .gitignore
touch bun.lock
touch components.json
touch eslint.config.js
touch index.html
touch package.json
touch postcss.config.js
touch README.md
touch tailwind.config.ts
touch tsconfig.app.json
touch tsconfig.app.tsbuildinfo
touch tsconfig.json
touch tsconfig.node.json
touch tsconfig.node.tsbuildinfo
touch vite.config.ts
touch vitest.config.ts

echo "تم إنشاء هيكل الملفات والمجلدات بنجاح!"
