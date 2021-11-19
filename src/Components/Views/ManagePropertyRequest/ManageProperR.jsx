import React from "react";
import LargeCard from "../../Global/LargeCard";
import Mytable from "../../Global/Mytable";

const ManageProperR = ({ ManInspReqData }) => {
  return (
    <div className="Large-card">
      <LargeCard title="Manage Property Request" Page="true" />
      <Mytable ManInspReqData={ManInspReqData} />
    </div>
  );
};

export default ManageProperR;
