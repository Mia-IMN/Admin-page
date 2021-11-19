import React from "react";
import ImageAvatars from "../../Global/ImageAvatars";
import Littlecards from "./Littlecards";
import icon1 from "../../Assets/Side Menu/Group (2).png";
import icon2 from "../../Assets/Side Menu/Group (1).png";
import icon3 from "../../Assets/Side Menu/Vector.png";
import icon4 from "../../Assets/Side Menu/Vector (1).png";
import icon5 from "../../Assets/Side Menu/Vector (2).png";
import icon6 from "../../Assets/Side Menu/Group 603.png";
import icon7 from "../../Assets/Side Menu/Group.png";
import icon8 from "../../Assets/Side Menu/Vector (3).png";
import icon9 from "../../Assets/Side Menu/exit-door 1.png";

const Sidemenu = ({
  name,
  OpenDash,
  Property,
  DashOpen,
  AddProperty,
  ManageProp,
  PropManager,
  ManageAgents,
  AgentManager,
  ManageAcct,
  AcctManager,
  ManageStaff,
  StaffManager,
  ManagePropReq,
  PropReqManager,
  ManageSubscriber,
  SubscriberManager,
  ManageInsp,
  InspManager,
  Message,
  Messenger,
  ManagePayment,
  PaymentManager,
  Notification,
  Notifier,
  Profile,
  Profiler,
}) => {
  const Icon1 = <img src={icon1} alt="icon" />;
  const Icon2 = <img src={icon2} alt="icon" />;
  const Icon3 = <img src={icon3} alt="icon" />;
  const Icon4 = <img src={icon4} alt="icon" />;
  const Icon5 = <img src={icon5} alt="icon" />;
  const Icon6 = <img src={icon6} alt="icon" />;
  const Icon7 = <img src={icon7} alt="icon" />;
  const Icon8 = <img src={icon8} alt="icon" />;
  const Icon9 = <img src={icon9} alt="icon" />;
  return (
    <div className="Sidemenu">
      <div className="avatar" onClick={Profiler}>
        <ImageAvatars name={name} size={{ width: 56, height: 56 }} />
        <h3 className="head">Real Explorer</h3>
      </div>
      <div className="card-list">
        <Littlecards
          clickProp={OpenDash}
          text="Dashboard"
          Icon={Icon1}
          Page={DashOpen}
        />
        <Littlecards
          clickProp={Property}
          text="Add Property"
          Icon={Icon2}
          Page={AddProperty}
        />
        <Littlecards
          clickProp={PropManager}
          text="Manage Property"
          Icon={Icon3}
          Page={ManageProp}
          badger="true"
          Notice="0"
        />
        <Littlecards
          clickProp={AgentManager}
          text="Manage Agent"
          Icon={Icon4}
          Page={ManageAgents}          badger="true"
          Notice="0"
        />
        <Littlecards
          clickProp={AcctManager}
          text="Manage Account"
          Icon={Icon5}
          Page={ManageAcct}
          badger="true"
          Notice="0"
        />
        <Littlecards
          clickProp={StaffManager}
          text="Manage Staff"
          Icon={Icon4}
          Page={ManageStaff}
          badger="true"
          Notice="0"
        />
        <Littlecards
          clickProp={PropReqManager}
          text="Manage Property Request"
          Icon={Icon3}
          Page={ManagePropReq}
          badger="true"
          Notice="0"
        />
        <Littlecards
          clickProp={SubscriberManager}
          text="Manage Subscriber"
          Icon={Icon6}
          Page={ManageSubscriber}
          badger="true"
          Notice="0"
        />
        <Littlecards
          clickProp={InspManager}
          text="Manage Inspection Request"
          Icon={Icon3}
          Page={ManageInsp}
          badger="true"
          Notice="0"
        />
        <Littlecards
          clickProp={Messenger}
          text="Message"
          Icon={Icon7}
          Page={Message}
          badger="true"
          Notice="0"

        />
        <Littlecards
          clickProp={PaymentManager}
          text="Manage Payment (Invoice)"
          Icon={Icon2}
          Page={ManagePayment}
        />
        <Littlecards
          clickProp={Notifier}
          text="Notification"
          Icon={Icon8}
          Page={Notification}
          badger="true"
          Notice="1"

        />
        <Littlecards
          clickProp={Profiler}
          text="Profile"
          Icon={Icon4}
          Page={Profile}
        />
        <Littlecards text="Logout" Icon={Icon9} />
      </div>
      <button onClick></button>
    </div>
  );
};

export default Sidemenu;
