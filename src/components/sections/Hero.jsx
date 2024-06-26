import styles from "../../style";
import { apple, google, slot_machine, micro_match_qr_code } from "../../assets";
import "../../index.css";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col`}>
      <div
        className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between text-left">
          <h1 className="flex-1  font-poppins font-semibold ss:text-[52px] text-[35px] text-white ss:leading-[65.8px] leading-[45px]">
            <br className="sm:block hidden" />{" "}
            <span className="">Endless Drafting</span>{" "}
          </h1>
        </div>
        <h1 className="text-gradient italic-text font-poppins font-semibold ss:text-[62px] text-[35px] text-white ss:leading-[75.8px] leading-[45px] p-[10px]">
          Custom Draft Boards
        </h1>

        <p className={`${styles.paragraph} max-w-[620px] mt-5 items-center`}>
          Draft from a unique 25 players each draft. MicroDraft gives you unlimited draft boards to play with for non stop drafting.
          {/* <span style={{ color: "#00FF00" }}> Head-To-Head </span> */}
          {/* <span style={{ color: "#00FF00" }}> Micro Draft Boards. </span>
          Out draft 1 user to profit. */}
        </p>
        <div className="flex flex-row mt-5">
          <div
            className={`${styles.paragraph} flex-col mt-5 md:text-right `}
            style={{ color: "white" }}
          >
            <p className="text-left">
              Start Micro Drafting <span className="">&rarr;</span>
            </p>

            <div className="flex flex-row flex-wrap sm:mt-3 mt-3">
              <a
                href="https://apps.apple.com/us/app/userbet/id1627538375"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={apple}
                  alt="App Store"
                  className="w-[120px] h-[50px] object-contain md:mr-2 mr-5 cursor-pointer"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.juused.juused_fantasy_leagues"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={google}
                  alt="Google Play"
                  className="w-[120px] h-[50px] object-contain cursor-pointer"
                />
              </a>
            </div>
          </div>

          <div
            className={`${styles.flexStart} sm:ml-10 ml-2 sm:mt-0 items-start`}
          >
            <img
              src={micro_match_qr_code}
              alt="hoobank"
              className="w-[120px] h-[120px]"
            />
          </div>
        </div>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <video
          className="w-[75%] h-[75%] relative z-[5]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={slot_machine} />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default Hero;
