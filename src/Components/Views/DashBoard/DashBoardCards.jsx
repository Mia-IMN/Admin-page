import React from "react";


const DashBoardCards = ({ header, figure, icon, total, color }) => {
  return (
    <div className="card" style={{ background: color }}>
      <div className="flex" >
        <div className="left-side">
          <h5 className="h5">{header}</h5>
          <h2 className="h2">{figure}</h2>
        </div>
        <div className="icon">{icon}</div>
      </div>
      <p className="p">{total}</p>
    </div>
  );
};

export default DashBoardCards;
