import React from "react";
import "./Phrases.css";

import Bestsol from "../Assets/Bestsol.png";
import Creativework from "../Assets/Creativework.png";
import Design from "../Assets/Design.png";

const Phrases = () => {
  return (
    <div className="content-container">
      <div className="phrase-container">
        <div className="phrase-item">
          <div className="icon-wrapper">
            <img src={Bestsol} alt="Icon" className="phrase-icon" />
          </div>
          <span className="phrase">Avant-Garde Mavericks</span>
        </div>
        <div className="phrase-item">
          <div className="icon-wrapper">
            <img src={Creativework} alt="Icon" className="phrase-icon" />
          </div>
          <span className="phrase">Emblazoned Artistry</span>
        </div>
        <div className="phrase-item">
          <div className="icon-wrapper">
            <img src={Design} alt="Icon" className="phrase-icon" />
          </div>
          <span className="phrase">Transcendent Visualizations</span>
        </div>
      </div>
      <div className="summary-container">
        <p className="summary-paragraph">
          We espouse the conviction that every crucible is a harbinger for a
          bespoke panacea. As a preeminent purveyor of tailored solutions, we
          stand at the avant-garde of innovation, supplying a cornucopia of
          offerings.
        </p>
        <p className="summary-paragraph">
          Whether you are an artisan, wordsmith, visionary, or any creative
          muse, Prince Global Trade unfurls portals to a realm of endless
          prospects. From synergistic endeavors to freelance callings, unearth
          the opus that resonates within your soul.
        </p>
        <p className="summary-paragraph">
          Immerse your self in a communion of design virtuosos who share your
          fervor for transcending the limits of opportunity. Synergize, change
          epiphanies, and raise your craft alongside kindred spirits.
        </p>
      </div>
    </div>
  );
};

export default Phrases;
