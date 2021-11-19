import React from "react";

const Littlecards = ({ Icon, text, clickProp, Page, badger, Notice }) => {
  return (
    <div
      onClick={clickProp}
      className={Page ? "Littlecards active" : "Littlecards"}
    >
      <div className="contents2">
      <div className="contents">
        <div className="Icon">{Icon}</div>
        <div className="Topic">{text}</div>
      </div>
        {badger ? (
          <div className="mybadge">
            <p className="Notice">{Notice}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Littlecards;
