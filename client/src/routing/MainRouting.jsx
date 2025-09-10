import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Overview from "../pages/Overview";
import HowItWorks from "../pages/HowItWorks";
import WhoWeAre from "../pages/WhoWeAre";
import OurServices from "../pages/OurServices";
import Contact from "../pages/Contact";

const MainRouting = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Overview />} />
          <Route path="/overview" element={<Overview />} />
          <Route path= "/how-it-works" element={<HowItWorks />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/our-services" element={<OurServices />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
};

export default MainRouting;
