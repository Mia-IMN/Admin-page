import React, {useState} from "react";
import Logo from "../../Global/Logo";
import BadgeOverlap from "./BadgedText";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ImageAvatars from "../../Global/ImageAvatars";
import Popup from "./Popup";

const Navbar = ({ firstname, Messenger, Notifier, Profiler }) => {
  const [openPopup, setOpenPopup] = useState(false)
  
  const Poper = ()=>{
    setOpenPopup(!openPopup)
  }
  const Bell = <NotificationsIcon fontSize="small" />;
  const message = <MessageIcon fontSize="small" />;
  return (
    <div className="Navbar">
      <div className="Navbar-items">
        <Logo />
        <div className="BadgeOverlap">
          <div className="mid" onClick={Notifier}>
            <BadgeOverlap Text="Notification" icon={Bell} />
          </div>
          <div className="mid" onClick={Messenger}>
            <BadgeOverlap Text="Messages" icon={message} />
          </div>
          <div className="user mid" onClick={Poper}>
            <span>
              <KeyboardArrowDownIcon />
            </span>
            {firstname} <ImageAvatars size={{ width: 24, height: 24 }} />{" "}
            {openPopup ? <Popup Profiler={Profiler}/> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
