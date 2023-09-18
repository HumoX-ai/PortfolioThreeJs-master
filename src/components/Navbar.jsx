/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { styles } from "../styles";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { logo, menu, close } from "../assets";
import Select from "./select/Select";
import { useTranslation } from "react-i18next";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const { t } = useTranslation();
  const navLinks = [
    {
      id: "about",
      title: t("about"),
    },

    {
      id: "work",
      title: t("work"),
    },
    {
      id: "contact",
      title: t("contact"),
    },
    {
      id: "#",
      title: t("resume"),
      icon: <ArrowDownTrayIcon className="h-6 w-6" />,
      url: "../../LastPortfolio.pdf",
    },
  ];
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5  ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 xs:flex-1 "
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-13 h-11 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer lg:block hidden">
            Humoyun &nbsp;
            <span> | Portfolio</span>
          </p>
        </Link>

        <ul className="list-none hidden lg:flex flex-row gap-10 ">
          {navLinks.map((nav) => (
            <li
              style={{ alignItems: "center" }}
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer flex gap-2 justify-center`}
              onClick={() => setActive(nav.title)}
            >
              <a href={nav.url} target="_blank" rel="noopener noreferrer">
                <ScrollLink
                  to={nav.id}
                  smooth={true}
                  duration={500} // adjust the duration as needed
                  offset={-100} // adjust the offset to account for the fixed navbar
                  spy={true}
                >
                  {nav.title}
                </ScrollLink>
              </a>
              <div>{nav.icon}</div>
            </li>
          ))}
        </ul>

        <div className="lg:ml-[2.5rem]">
          <Select />
        </div>
        <div className="lg:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <div key={nav.id}>
                  <li
                    style={{ alignItems: "center" }}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-secondary"
                    } flex gap-1`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={nav.url} download>
                      <ScrollLink
                        to={nav.id}
                        smooth={true}
                        duration={500} // adjust the duration as needed
                        offset={-100} // adjust the offset to account for the fixed navbar
                        spy={true}
                      >
                        {nav.title}
                      </ScrollLink>
                    </a>
                    <div>{nav.icon}</div>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
