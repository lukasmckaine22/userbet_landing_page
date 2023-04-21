import { apple, bill, google, micro_match_thrill } from "../../assets";
import styles, { layout } from "../../style";
import ImageRotator from "../image_rotator";
import Button from "../Button";
import RedRectangle from "../pick_up/drafting_screen";

const DraftBoardThrill = () => (
  <section id="thrill" className={`${layout.sectionReverse} flex-col-reverse`}>
    <div className={layout.sectionImgReverse}>
      <video className="w-[75%] h-[75%] relative z-[5]" autoPlay loop muted>
        <source src={micro_match_thrill} />
        Your browser does not support the video tag.
      </video>
    </div>
    <div className={`${layout.sectionInfo} items-center`}>
      <h2 className={`${styles.heading2} text-center`}>
        You Pick The
        <br className="sm:block hidden" /> Draft Board
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
