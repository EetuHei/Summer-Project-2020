import React from "react";

const Total = (props) => {
  return (
    <>
      <tr>
        <td>all</td>
        <td>
          {props.data.data.feedbackData
            .map((data) => data.value)
            .reduce((a, b) => a + b)}
        </td>
      </tr>
    </>
  );
};

export default Total;
