import React from 'react'
import './Hero.css';

import Export from "../Assets/Export.jpeg";
// import Team from "../Assets/Team.jpeg";

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-export">
            <img src={Export} alt="Hero "  />
        </div>
        {/* <div className="hero-team">
          <img src={Team} alt="Hero" />
          <div className="hero-team-title">
            <h2>Embark on a Transformative Journey</h2>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Hero