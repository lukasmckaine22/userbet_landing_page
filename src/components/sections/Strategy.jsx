import { apple, bill, google } from "../../assets";
import styles, { layout } from "../../style";
import Rectangle from "../DraftBoard";

const Strategy = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      {/* <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" /> */}
      <Rectangle />

      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        1,000 Matches <br className="sm:block hidden" /> 1,000 Unique Draft
        Boards
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Every draft board brings new players and different positional
        advantages. Develop new strategies and tactics for each draft board.
      </p>
    </div>
  </section>
);

export default Strategy;
