import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "Translations of Quran": "Translations of Quran",
          "Interactive files": "Interactive files",
          "Islamic applications": "Islamic applications",
          "Another Islamic sites": "Another Islamic sites",
          "Language": "Language",
          "Rate your experience": "Rate your experience",
          "Enter your comment here...": "Enter your comment here...",
          "Send": "Send",
          "Your comment has been sent successfully": "Your comment has been sent successfully"
        }
      },
      ar: {
        translation: {
          "Translations of Quran": "ترجمات القرآن",
          "Interactive files": "ملفات تفاعلية",
          "Islamic applications": "تطبيقات إسلامية",
          "Another Islamic sites": "مواقع إسلامية أخرى",
          "Language": "اللغة",
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