import React from "react";

const Mytable = ({ Item }) => {
  return (
    <div>
      {Item.map((data, index) => {
        return (
          // <div key={index}>
            <table className="table" key={index}>
              <thead>
                <th className="S">{data.S}</th>
                <th className="N">{data.N}</th>
                <th className="P">{data.P}</th>
                <th className="E">{data.E}</th>
                <th className="A">{data.A}</th>
                <th className="D">{data.D}</th>
                <th className="T">{data.T}</th>
              </thead>
              <tbody>
                <tr className="tr">
                  <td className="S">{data.serial}</td>
                  <td className="N">{data.Names}</td>
                  <td className="P">{data.PhoneNumber}</td>
                  <td className="E">{data.emailAddress}</td>
                  <td className="A">{data.Address}</td>
                  <td className="D">{data.date}</td>
                  <td className="T">{data.time}</td>
                </tr>
              </tbody>
            </table>
          // </div>
        );
      })}
    </div>
  );
};

export default Mytable;
