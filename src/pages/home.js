import React from "react";
import Background from "../img/danilopalen.jpg";
import "./pages.scss";

export default function Home() {
  return (
    <div className="container">
      <div className="container-heading">
        <div className="container-heading-text item-center">
          <h1>Hi 👋 I'm Danilo Palen</h1>
          <h4 className="container-heading-h4">
            I'm a Developer 👨‍💻 based in New Zealand with commercial experience
            in Web and Software Development.
          </h4>
          <p>
            #HTML #CSS #JavaScript #TypeScript #React #Next.js #GraphQl
            #LightningWebComponents #JEST
          </p>
          <a href="https://www.linkedin.com/in/danilo-palen/" target="_blank">
            <button className="btn-hire">LinkedIn</button>
          </a>
        </div>
        <div className="dp-container">
          <img src={Background} className="dp item-center"></img>
        </div>
      </div>
    </div>
  );
}
