import React from "react";
import Logo from "../../Global/Logo";
import BadgeOverlap from "./BadgedText";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FaceIcon from '@mui/icons-material/Face';

const Navbar = () => {
  const Bell = <NotificationsIcon fontSize="small" />;
  const message = <MessageIcon fontSize="small" />;
  return (
    <div className="Navbar">
        <div className="Navbar-items">
      <Logo />
      <div className="BadgeOverlap">
      <BadgeOverlap Text="Notification" icon={Bell} />
      <div className="mid">
      <BadgeOverlap Text="Messages" icon={message} />
      </div>
      <div className="user"><span><KeyboardArrowDownIcon /></span>Ayodele <FaceIcon /> </div>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
