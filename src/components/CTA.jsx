import styles from "../style";
import Button from "./Button";
import { micro_match_qr_code } from "../assets";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>
        Ready to feel the rush of Micro Drafting?
      </h2>
      <p
        className={`${styles.paragraph}  mt-5 md:text-right text-left`}
        style={{ color: "#00FF00" }}
      >
        Download <br className="sm:block hidden" /> Micro Match{" "}
        <span className="inline-block md:inline">&rarr;</span>
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <img
        src={micro_match_qr_code}
        alt="hoobank"
        className="w-[120px] h-[120px]"
      />
    </div>
  </section>
);

export default CTA;
