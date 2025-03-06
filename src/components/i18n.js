import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "English": "English",
          "Home": "Home",
          "Videos": "Videos",
          "Translations of Quran": "Translations of Quran",
          "Interactive files": "Interactive files",
          "Islamic applications": "Islamic applications",
          "Another Islamic sites": "Another Islamic sites",
          "View more": "View more",
          "Rate your experience": "Rate your experience",
          "Enter your comment here...": "Enter your comment here...",
          "Send": "Send",
          "Your comment has been sent successfully": "Your comment has been sent successfully",
          videoLinks: {
            video1: "https://www.youtube.com/embed/f8PTOQFl4f4?si=2TJ3xIob6pZcAgEz",
            video2: "https://www.youtube.com/embed/6tJqEU9W4jg?si=n_EOnuzmkO8ATAx2",
            video3: "https://www.youtube.com/embed/rjcMwuVMuYc?si=coI-ULqr5Au1sNgZ"
          }
      }
      },
      ar: {
        translation: {
          "English": "العربية",
          "Home": "الرئيسية",
          "Videos": "الفيديوهات",
          "Translations of Quran": "ترجمات القرآن",
          "Interactive files": "ملفات تفاعلية",
          "Islamic applications": "تطبيقات إسلامية",
          "Another Islamic sites": "مواقع إسلامية أخرى",
          "View more": "عرض المزيد",
          "Rate your experience": "قيّم تجربتك",
          "Enter your comment here...": "أدخل تعليقك هنا...",
          "Send": "إرسال",
          "Your comment has been sent successfully": "تم إرسال تعليقك بنجاح"
        }
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;