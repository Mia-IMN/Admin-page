import React from "react";
import ManageProperty from "../ManageProperty/ManageProperty";
import ManageAgent from "../ManageAgents/ManageAgent";
import ManageAccts from "../ManageAcct/ManageAccts";
import Managestaff from "../ManageStaff/Managestaff";
import DashBoard from "../DashBoard/DashBoard";
import AdProperty from "../AddProperty/AdProperty";
import ManageProperR from "../ManagePropertyRequest/ManageProperR";
import ManSubscriber from "../ManageSubscriber/ManSubscriber";
import ManInspReq from "../ManageInspectionReq/ManInspReq";
import Messages from "../Message/Messages";
import ManPayment from "../ManagePayment/ManPayment";
import Notific from "../Notification/Notific";
import Prof from "../Profile/Prof";

const DashboardOverview = ({
  DashOpen,
  AddProperty,
  ManageProp,
  ManageAgents,
  ManageAcct,
  ManageStaff,
  ManagePropReq,
  ManageSubscriber,
  ManageInsp,
  Message,
  ManagePayment,
  Notification,
  Profile,
  firstname,
  lastname,
  email,
  ManInspReqData,
  ManPropReqData,
}) => {
  return (
    <div className="DashboardOverview">
      {DashOpen ? <DashBoard ManInspReqData={ManInspReqData} ManPropReqData={ManPropReqData}/> : null}
      {AddProperty ? <AdProperty /> : null}
      {ManageProp ? <ManageProperty /> : null}
      {ManageAgents ? <ManageAgent /> : null}
      {ManageAcct ? <ManageAccts /> :null}
      {ManageStaff ? <Managestaff/> :null}
      {ManagePropReq ? <ManageProperR ManInspReqData={ManInspReqData}/> :null}
      {ManageSubscriber ? <ManSubscriber/> : null}
      {ManageInsp ? <ManInspReq ManInspReqData={ManInspReqData}/> : null}
      {Message ? <Messages/> : null}
      {ManagePayment ? <ManPayment/> : null}
      {Notification ? <Notific /> : null}
      {Profile ? <Prof firstname={firstname} lastname={lastname} email={email}/> : null}
      
    </div>
  );
};

export default DashboardOverview;
