import React from "react";
import Navbar from "../sections/Navbar";
import Profile from "../components/Profile";
import Home from "../sections/Home";
import Pricing from "../sections/Pricing";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

function Page() {
  return (
    <div className="container relative">
      <Navbar />
      <Profile />
      <Home />
      <Projects />
      <Pricing />
      <Contact />
    </div>
  );
}

export default Page;
