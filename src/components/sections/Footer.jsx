import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../style";
import { micro_match_logo_1 } from "../../assets";
import { footerLinks, socialMedia } from "../../constants";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div
        className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full justify-center`}
      >
        <div className="flex-[1] flex flex-col justify-center mr-10 items-start">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={micro_match_logo_1}
              alt="hoobank"
              className="w-[266px] h-[72.14px] object-contain text-center"
            />
          </div>
          <p
            className={`${styles.paragraph} mt-4 max-w-[312px] text-left items-left`}
          >
            Micro Draft innovates on the best two parts of fantasy sports, snake
            drafts and H2H matchups.
          </p>
        </div>

        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className="flex flex-col ss:my-0 my-4 min-w-[150px]"
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4 mr-8">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-highlight cursor-pointer ${index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  onClick={() => {
                    if (link.name === "Privacy Policy") {
                      handleNavigate("/privacy-policy");
                    } else if (link.name === "Terms of Service") {
                      handleNavigate("/terms-of-service");
                    }
                  }}
                >
                  {link.link && link.name !== "Privacy Policy" && link.name !== "Terms of Service" ? (
                    <a
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                  ) : (
                    link.name
                  )}
                </li>
              ))}
            </ul>

          </div>
        ))}
      </div>

      <div className="w-full flex justify-between items-left md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          Copyright Ⓒ 2024 Juused Inc. All Rights Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[45px] h-[45px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                }`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
