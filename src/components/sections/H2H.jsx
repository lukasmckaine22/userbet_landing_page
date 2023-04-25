import { features } from "../../constants";
import styles, { layout } from "../../style";
import { H2H_graphic } from "../../assets";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-1" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const H2H = () => (
  <section id="h2h" className={`${layout.section} flex-col-reverse`}>
    <div className={layout.sectionImgReverse}>
      <img
        src={H2H_graphic}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={`${layout.sectionInfo} items-center`}>
      <div className={`${layout.sectionImg} flex-col`}>
        <h1 className={`${styles.heading2} mb-5 text-center`}>
          Head-To-Head Only
        </h1>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default H2H;

{
  /* <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Micro draft boards were designed to make H2H drafts fun. Now you only
        have to out draft ONE person to DOUBLE your money instead of ten or even
        thousands.
      </p> */
}

{
  /* <Button styles={`mt-10`} /> */
}
