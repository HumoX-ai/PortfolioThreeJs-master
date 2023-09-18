import { hand } from "../assets";
import { styles } from "../styles";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
const Hero = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="relative w-full h-[90vh]">
        <div
          className={`${styles.paddingX} absolute inset-0 xs:top-[50px] lg:top-[120px]  max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 xs:h-[400px] sm:h-[360px]  violet-gradient" />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText}`}>
              <div className="flex gap-2">
                {t("greeting")}{" "}
                <img
                  src={hand}
                  alt="hand"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-26 lg:h-26"
                />
                ,
              </div>
              {t("myName")}{" "}
              <span className="text-[#915eff]">{t("userName")}</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              {t("description")}
            </p>
          </div>
        </div>
      </div>
      <div className=" w-full flex justify-center items-center">
        <a href="#about">
          <div className="w[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
