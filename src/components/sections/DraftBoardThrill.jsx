import { micro_match_game_play } from "../../assets";
import styles, { layout } from "../../style";

const DraftBoardThrill = () => (
  <section id="thrill" className={`${layout.sectionReverse} flex-col-reverse`}>
    <div className={layout.sectionImgReverse}>
      <video
        className="w-[75%] h-[75%] relative z-[5]"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={micro_match_game_play} />
        Your browser does not support the video tag.
      </video>
    </div>
    <div className={`${layout.sectionInfo} items-center`}>
      <h2 className={`${styles.heading2} text-center`}>
        Intelligently Curated
        <br className="sm:block hidden" /> Draft Boards
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
