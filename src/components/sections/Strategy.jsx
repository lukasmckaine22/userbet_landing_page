import styles, { layout } from "../../style";
import "../../index.css";
import Grid from "../ColorGrid";

const Strategy = () => (
  <section id="strategy" className={`${layout.sectionReverse} flex-col `}>
    <div className={`${layout.sectionInfo} items-center`}>
      <p className={`${styles.heading2} items-center text-center`}>
        Unleash
        <br className="sm:block hidden" /> New Strategies
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
        Every draft board brings new players and different positional
        advantages. Develop new strategies and tactics for each draft board.
      </p>
    </div>
    <div className={`${layout.sectionImgReverse} flex flex-row `}>
      <div>
        <Grid
          minGreen={4}
          maxGreen={10}
          minBlue={4}
          maxBlue={10}
          minRed={2}
          maxRed={4}
          minYellow={2}
          maxYellow={4}
        />
      </div>
    </div>
  </section>
);

export default Strategy;
