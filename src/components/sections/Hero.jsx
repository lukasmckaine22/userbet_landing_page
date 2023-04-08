import styles from "../../style";
import { apple, google, discount, robot, slot_machine } from "../../assets";
import GetStarted from "../GetStarted";

export const Hero = () => (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} md:mb-24`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0  sm:px-16 px-6`}>

          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[65px]">
            Innovating on <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Fantasy Snake Drafts</span>{" "}
            <br className="sm:block hidden" />{" "}
            
          </h1>
          <p className={`${styles.paragraph} max-w-[670px] mt-5`}>
          Head to Head Snake Drafts <span style={{color: 'yellow'}}>with Micro Draft Boards</span>
          </p>
          <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[200px] h-[67px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[200px] h-[67px] object-contain cursor-pointer" />
      </div>

      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        {/* <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" /> */}
        <video className="w-[75%] h-[75%] relative z-[5]" autoplay loop>
          <source src={slot_machine} />
            Your browser does not support the video tag.
          </video>

      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>

      

    </section>
  )


export default Hero;