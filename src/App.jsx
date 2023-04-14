import styles from "./style";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  DraftBoardThrill,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "./components";
import MicroMatchPlayerCard from "./components/pick_up/micro_match_player_card";
import { apple, google, discount } from "./assets";
import Player from "./models/player";

const App = () => {
  return (
    <div className="bg-primary bg-slate-950 w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          {/* <Stats /> */}
          <DraftBoardThrill />
          {/* <MicroMatchPlayerCard player={examplePlayer} /> */}
          {/* <CardDeal /> */}
          <Billing />
          <Business />
          {/* <Testimonials />
        <Clients /> */}
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
