import { card } from "../../assets";
import styles, { layout } from "../../style";
import Button from "../Button";

const DraftDraft = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Draft, Draft & Draft Again! <br className="sm:block hidden" /> 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        No two drafts are the same! Develop new strategies and tactics for each draft board.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default DraftDraft;