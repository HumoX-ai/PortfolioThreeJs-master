import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "uz", // Default fallback language
    debug: true, // Enable debug mode for development
    interpolation: {
      escapeValue: false, // React already escapes the values
    },
    resources: {
      uz: {
        translation: {
          greeting: "Salom",
          myName: "Ismim",
          userName: "Humoyun",
          description:
            "va men bir dasturchiman. Men IT sohasida 1 yillik tajribaga ega bo'lganman va endi ham yuqori darajada tajribaga erishishga harakat qilayapman. Men frontend va backend texnologiyalariga malakali bo'lib, JavaScript, Node.js, va React jsda o'zimni kuchaytiryapman. Agar sizda qandaydir men haqimda savol tug'ilsa, menga xohlagan paytingiz murojaat qilishingiz mumkin",
          about: "Haqimda",
          work: "Faoliyatim",
          contact: "Bog'lanish",
          resume: "Rezyume",
          introduction: "KIRISH",
          overview: "Umumiy ko'rinish",
          skill:
            "Men TypeScript va JavaScript-da tajribaga ega va React, Node.js va Three.js kabi ramkalar bo‘yicha tajribaga ega bo‘layotgangan dasturchiman. Men tez o'rganuvchiman va real muammolarni hal qiladigan samarali, kengaytiriladigan va foydalanuvchilarga qulay yechimlarni yaratish uchun mijozlar bilan yaqindan hamkorlik qilaman. G'oyalarimizni hayotga tatbiq etish uchun birgalikda harakat qilaylik!",
          skillTwo: "men hozirgacha nima qildim",
          experience: "Ish tajribam",
          company: "Men shu kompaniyalarda ishlashni maqsad qilganman",
          works: "Mening ishlarim",
          projects: "Proektlar",
          about_project:
            "Quyidagi loyihalar mening ko'nikmalarim va tajribamni namoyish etadi va mening ishimning haqiqiy misollari. Har bir loyiha qisqacha tavsiflanadi GitHubga  havolalar va undagi demolar bilan. Bu mendagi murakkab muammolarni hal qilish, turli texnologiyalar bilan ishlash qobiliyati va loyihalarni samarali boshqarish aks ettiradi.",
        },
      },
      en: {
        translation: {
          greeting: "Hi",
          myName: "I'm",
          userName: "Humoyun",
          description:
            "and i am a programmer. I have 1 year experience in IT field and still trying to get more experience. I'm proficient in frontend and backend technologies and I'm strengthening myself in JavaScript, Node.js, and React js. If you have any question about me, you can contact me anytime",
          about: "About",
          work: "Work",
          contact: "Contact",
          resume: "Resume",
          introduction: "INTRODUCTION",
          overview: "Overview",
          skill:
            "I'm a developer with experience in TypeScript and JavaScript, and growing experience with frameworks like React, Node.js, and Three.js. I am a fast learner and work closely with clients to create efficient, scalable and user-friendly solutions that solve real-world problems. Let's work together to bring our ideas to life!",
          skillTwo: "What i have done so far",
          experience: "Work Experience",
          company: "I aim to work in these companies",
          works: "My work",
          projects: "Projects",
          about_project:
            "Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.",
        },
      },

      ru: {
        translation: {
          greeting: "Привет",
          myName: "меня зовут",
          userName: "Humoyun",
          description:
            "A я программист. У меня 1 год опыта работы в сфере ИТ, и я все еще пытаюсь получить больше опыта. Я разбираюсь в технологиях внешнего и внутреннего интерфейса, и я совершенствуюсь в JavaScript, Node.js и React js. Если у вас есть какие-либо вопросы обо мне, вы можете связаться со мной в любое время",
          about: "Oбо мне",
          work: "Pабота",
          contact: "Контакт",
          resume: "Резюме",
          introduction: "ВВЕДЕНИЕ",
          overview: "Обзор",
          skill:
            "Я разработчик с опытом работы с TypeScript и JavaScript и растущим опытом работы с такими фреймворками, как React, Node.js и Three.js. Я быстро учусь и тесно сотрудничаю с клиентами, чтобы создавать эффективные, масштабируемые и удобные для пользователя решения, решающие реальные проблемы. Давайте работать вместе, чтобы воплотить наши идеи в жизнь!",
          skillTwo: "Что я сделал до сих пор",
          experience: "Опыт работы",
          company: "Я планирую работать в этих компаниях",
          works: "Мои работы",
          projects: "Проекты",
          about_project:
            "Следующие проекты демонстрируют мои навыки и опыт посредством реальные примеры моих работ. Кратко описан каждый проект со ссылками на репозитории кода и живые демоверсии. Это отражает мой умение решать сложные задачи, работать с разными технологиями, и эффективно управлять роектами.",
        },
      },
    },
  });

export default i18n;
