import React from "react";
import LargeCard from "../../Global/LargeCard";
import Mytable from "../../Global/Mytable";

const ManInspReq = ({ ManInspReqData}) => {
  return (
    <div className="Large-card">
      <LargeCard title="Manage Inspection Request" Page="true" />
      <Mytable ManInspReqData={ManInspReqData}/>
    </div>
  );
};

export default ManInspReq;
