import React from "react";
import "./TeamComponent.css";
import Team from "../Assets/Team.jpeg";

const TeamComponent = () => {
  return (
    <div>
      <div className="team">
        <img src={Team} alt="Team" />
      </div>
      <div className="team-title">
        <h2>Embark on a Transformative Journey</h2>
      </div>
      <div className="team-summary">
        <p>
          Prince Global Trade is an innovative and forward-thinking company that
          goes beyond conventional solutions. They prioritize understanding and
          meeting the unique needs of their customers, fostering long-lasting
          partnerships. With a commitment to continuous improvement and a
          culture of creativity, Prince Global Trade strives to provide
          cutting-edge solutions that shape the current times.
        </p>
      </div>
    </div>
  );
};

export default TeamComponent;
