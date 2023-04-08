import { apple, bill, google, micro_match_drafting } from "../../assets";
import styles, { layout } from "../../style";
import ImageRotator from "../image_rotator";
import Button from "../Button";


const DraftBoardThrill = () => (
  <section id="product" className={layout.sectionReverse}>
    
    <div className={layout.sectionImgReverse}>
      {/* <img src={micro_match_drafting} alt="billing" className="image-size" /> */}
      <ImageRotator/>

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
        Every draft board brings a new group of players and different positional advantages.
      </p>
      <Button styles={`mt-10`} />

    </div>
  </section>
);

export default DraftBoardThrill;