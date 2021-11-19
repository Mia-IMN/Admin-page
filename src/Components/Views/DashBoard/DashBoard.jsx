import React from "react";
import DashBoardCards from "./DashBoardCards";
import one from "../../Assets/DashBoard/one.png";
import two from "../../Assets/DashBoard/two.png";
import three from "../../Assets/DashBoard/three.png";
import LargeCard from "../../Global/LargeCard";
import Mytable from "../../Global/Mytable";

const DashBoard = ({ManInspReqData, ManPropReqData}) => {
  const pic1 = <img src={one} alt="pic-icons" />;
  const pic2 = <img src={two} alt="pic-icons" />;
  const pic3 = <img src={three} alt="pic-icons" />;
  return (
    <div className="Dashboard">
      <h3 className="title">Dashboard Overview</h3>
      <div className="cards">
        <DashBoardCards
          header="Total Agents"
          figure="300"
          total="100 Total for April, 2020"
          color="#ff6161"
          icon={pic2}
        />
        <DashBoardCards
          header="Total Admins"
          figure="270"
          total="20 Total for April, 2020"
          color="#534584"
          icon={pic1}
        />
        <DashBoardCards
          header="Total Revenue"
          figure="N5,000,000"
          total="N700,000 for April, 2020"
          color="#D08A47"
          icon={pic3}
        />
        <DashBoardCards
          header="Total Sold"
          figure="700"
          total="250 Total Property Sold for April, 2020"
          color="#D08A47"
          icon={pic3}
        />
        <DashBoardCards
          header="Property for Rent"
          figure="1200"
          total="450 Total Posted for Rent for April, 2020"
          color="#ff6161"
          icon={pic2}
        />
        <DashBoardCards
          header="Property for Sale"
          figure="3500"
          total="1000 Total Posted for Sale for April, 2020"
          color="#534584"
          icon={pic1}
        />
      </div>
      <div className="Large-card margin-top">
        {/* The class name of Large-card is defined in global, it's what giving it the cardlike shape layout */}
        <LargeCard title="Recent request for Inspection" ManInspReqData={ManInspReqData} />
        <Mytable Item={ManInspReqData}/>
      </div>
      <div className="Large-card margin-top">
        <LargeCard title="Recent request for Property" />
        <Mytable Item={ManPropReqData}/>
      </div>
    </div>
  );
};

export default DashBoard;
