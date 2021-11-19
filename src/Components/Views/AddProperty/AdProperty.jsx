import React from "react";

const AdProperty = () => {
  return (
    <form className="adproperty">
      <div className="border">
        <div className="titl">
          <h3 className="titl-h3">Listing Type</h3>
        </div>
        <input type="radio" name="listing type" id="" />
        <label htmlFor="">For Sale</label>
        <input type="radio" name="listing type" id="" />
        <label htmlFor="">To Rent</label>
      </div>
      <div className="border">
        <div className="titl">
          <h3 className="titl-h3">Property Type</h3>
        </div>
        <select name="Select type" id="" placeholder="">
          <option value="">Commercial</option>
        </select>
      </div>
      <div className="border">
        <div className="titl">
          <h3 className="titl-h3">Amount</h3>
        </div>
        <select name="Select type" id="" placeholder="">
          <option value="">Commercial</option>
        </select>
      </div>
      <div className="border">
        <div className="titl">
          <h3 className="titl-h3">Basic Features</h3>
        </div>
        <select name="Select type" id="" placeholder="">
          <option value="">Commercial</option>
        </select>
      </div>
      <div className="border description-area">
        <div className="titl">
          <h3 className="titl-h3">Description</h3>
        </div>
        <select name="Select type" id="" placeholder="">
          <option value="">Commercial</option>
        </select>
      </div>
      <div className="border Image-upload">
        <div className="titl">
          <h3 className="titl-h3">Image</h3>
        </div>
        <select name="Select type" id="" placeholder="">
          <option value="">Commercial</option>
        </select>
      </div>
    </form>
  );
};

export default AdProperty;
