import React from "react";

const Percent = (props) => {
  const goodValue = props.data.data.feedbackData[0].value;
  const total = props.data.data.total;
  let percentVal = (goodValue / total) * 100;

  return (
    <>
      <tr>
        <td>positive</td>
        <td>{percentVal} %</td>
      </tr>
    </>
  );
};

export default Percent;
