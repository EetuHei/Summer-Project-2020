import React from "react";

const Stats = (props) => {
  return (
    <>
      {props.data.data.feedbackData.map((data, i) => (
        <tr key={i}>
          <td key={"name"}>{data.name}</td>
          <td key={"value"}>{data.value}</td>
        </tr>
      ))}
    </>
  );
};

export default Stats;
