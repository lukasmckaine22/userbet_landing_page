import { apple, bill, google } from "../../assets";
import styles, { layout } from "../../style";
import ImageRotator from "../image_rotator";
import Button from "../Button";
import RedRectangle from "../pick_up/drafting_screen";

const DraftBoardThrill = () => (
  <section id="thrill" className={`${layout.sectionReverse} flex-col-reverse`}>
    <div className={layout.sectionImgReverse}>
      {/* <img src={micro_match_drafting} alt="billing" className="image-size" /> */}
      {/* <ImageRotator /> */}
      <RedRectangle />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Feel The Rush With <br className="sm:block hidden" /> Every Micro Draft
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Shuffle the players until you find a draft board you like. You never
        know what you're going to get.
      </p>
      {/* <Button styles={`mt-10`} /> */}
    </div>
  </section>
);

export default DraftBoardThrill;
