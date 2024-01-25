import React from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import Info from "./Info.jsx";
import About from "./About.jsx";
import Interests from "./Interests.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
  return (
    <>
      <div className="container">
        <Info emailIcon={<HiMail />} linkedInIcon={<FaLinkedin />} />
        <About />
        <Interests />
        <Footer gitHubIcon={<FaGithubSquare />} linkedInIcon={<FaLinkedin />} />
      </div>
    </>
  );
}
