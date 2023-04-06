import styles from "../../style";
import { discount, robot } from "../../assets";
import GetStarted from "../GetStarted";
import Pill from '../Pill';



export const Hero = () => (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0  sm:px-16 px-6`}>

        {/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
            <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
            <p className={`${styles.paragraph} ml-2`}>
              <span className="text-white">10%</span> Sign Up {" "}
              <span className="text-white">Bonus</span>
            </p>
        </div> */}

          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[65px]">
            Serving Fantasy <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Players With</span>{" "}
            <br className="sm:block hidden" />{" "}
            Innovative Snake Drafts
          </h1>
          <p className={`${styles.paragraph} max-w-[670px] mt-5`}>
          Head to Head Snake Drafts <span style={{color: 'yellow'}}>with Micro Draft Boards</span>
          </p>

        {/* <div className="ss:flex hidden md:mr-4 mr-0">
          <Pill label="Blue" color="blue" />
        </div> */}

      </div>

      

    </section>
  )


export default Hero;