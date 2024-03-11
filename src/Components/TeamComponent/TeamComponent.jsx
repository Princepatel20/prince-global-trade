import React from "react";
import './TeamComponent.css';
import Team from "../Assets/Team.jpeg";

const TeamComponent = () => {
  return (
    <div>
      <div className="team">
        <img src={Team} alt="Team" />
        <div className="team-title">
          <h2>Embark on a Transformative Journey</h2>
        </div>
      </div>
    </div>
  );
};

export default TeamComponent;
