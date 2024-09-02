import React from "react";
import "./index.css";

const ResultArea = ({tableData}) => {    
  return (
    <div className="result">
      <table className="table">
        <thead>
          <tr>
            <td>Mouse Click Number</td>
            <td>Reaction Time</td>
          </tr>
        </thead>
        <tbody>{
            tableData?.map((data, i) => {
                <tr>
                    {console.log(data)                    }
                    <td>{data.mouseClick}</td>
                    <td></td>
                </tr>
            })
            }</tbody>
      </table>
    </div>
  );
};

export default ResultArea;
