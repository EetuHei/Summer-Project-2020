import React from "react";

const Average = (props) => {
  const goodVal = props.data.data.feedbackData[0].value;
  const badVal = props.data.data.feedbackData[2].value;
  const total = props.data.data.total;

  let avg = (goodVal * 1 + badVal * -1) / total;

  return (
    <>
      <tr>
        <td>average</td>
        <td>{avg}</td>
      </tr>
    </>
  );
};

export default Average;
