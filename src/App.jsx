import styles from "./style";
import {
  Billing,
  Business,
  CTA,
  DraftBoardThrill,
  Footer,
  Navbar,
  Hero,
} from "./components";

const App = () => {
  return (
    <div className="bg-custom-blue w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={` ${styles.flexStart}`}>
        <div className={` ${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={` ${styles.boxWidth}`}>
          <DraftBoardThrill />
          <Billing />
          <Business />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
