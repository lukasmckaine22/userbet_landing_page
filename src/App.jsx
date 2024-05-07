import React, { useEffect } from "react";
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
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { redirectToApp } from "./components/redirect_page";
import PickupDraft from "./components/PickupDraft";
import NotFound from "./components/NotFound";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import { PDFViewer } from "@react-pdf/renderer";

const Home = () => (
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

const App = () => {
  useEffect(() => {
    redirectToApp();
  }, [location.pathname]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pickupdraft/:id" element={<PickupDraft />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </Router>
  );
};

export default App;
