import { apple, bill, google } from "../../assets";
import styles, { layout } from "../../style";
import Rectangle from "../DraftBoard";
import "../../index.css";

const Strategy = () => (
  <section id="product" className={layout.sectionReverse}>
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
    <div className={`${layout.sectionImgReverse} flex flex-row `}>
      <div className="text-div mr-5">
        Positions <br /> Available
      </div>
      <div className={`${layout.sectionImgReverse} flex flex-col mb-5`}>
        <div className="text-div mb-5">Draft Board</div>

        <Rectangle />
      </div>
    </div>
  </section>
);

export default Strategy;
