import styles from "../../style";
import {
  apple,
  google,
  discount,
  robot,
  slot_machine,
  micro_match_qr_code,
} from "../../assets";
import GetStarted from "../GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[62px] text-[52px] text-white ss:leading-[75.8px] leading-[55px]">
            Endless Drafting,
            <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Unlimited</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[75.8px] leading-[55px] w-full">
          Draft Boards
        </h1>
        <p className={`${styles.paragraph} max-w-[670px] mt-5`}>
          Revolutionize your fantasy football experience with our innovative
          <span style={{ color: "#00FF00" }}> Head-To-Head </span>
          <span style={{ color: "#00FF00" }}>Micro Draft Boards.</span>
        </p>
        <div className="flex flex-row mt-5">
          <p
            className={`${styles.paragraph} mt-5 md:text-right text-left`}
            style={{ color: "white" }}
          >
            Download
            <br />
            Micro Match <span className="">&rarr;</span>
          </p>
          <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
            <img
              src={micro_match_qr_code}
              alt="hoobank"
              className="w-[120px] h-[120px]"
            />
          </div>
        </div>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={apple}
            alt="google_play"
            className="w-[200px] h-[67px] object-contain mr-5 cursor-pointer"
          />
          <img
            src={google}
            alt="google_play"
            className="w-[200px] h-[67px] object-contain cursor-pointer"
          />
        </div>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <video className="w-[75%] h-[75%] relative z-[5]" autoplay loop muted>
          <source src={slot_machine} />
          Your browser does not support the video tag.
        </video>

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

// const Hero = () => (
//   <section
//     id="home"
//     className={`flex md:flex-row flex-col ${styles.paddingY} md:mb-24`}
//   >
//     <div
//       className={`flex-1 ${styles.flexStart} flex-col xl:px-0  sm:px-16 px-6`}
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "flex-start",
//       }}
//     >
//       <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[65px]">
//         Innovating <br className="sm:block hidden" />{" "}
//         <span className="text-gradient">Fantasy Snake Drafts</span>{" "}
//         <br className="sm:block hidden" />{" "}
//       </h1>
// <p className={`${styles.paragraph} max-w-[670px] mt-5`}>
//   Head to Head Snake Drafts{" "}
//   <span style={{ color: "yellow" }}>with Micro Draft Boards</span>
// </p>
// <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
//   <img
//     src={apple}
//     alt="google_play"
//     className="w-[200px] h-[67px] object-contain mr-5 cursor-pointer"
//   />
//   <img
//     src={google}
//     alt="google_play"
//     className="w-[200px] h-[67px] object-contain cursor-pointer"
//   />
// </div>
//     </div>
//     <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
//       {/* <img
//         src={robot}
//         alt="billing"
//         className="w-[100%] h-[100%] relative z-[5]"
//       /> */}
// <video className="w-[75%] h-[75%] relative z-[5]" autoplay loop>
//   <source src={slot_machine} />
//   Your browser does not support the video tag.
// </video>
//     </div>

//     {/* <div className={`ss:hidden ${styles.flexCenter}`}>
//       <GetStarted />
//     </div> */}
//   </section>
// );

export default Hero;
