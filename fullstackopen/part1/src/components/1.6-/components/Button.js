import React from "react";

const Button = (props) => {
  const data = props.data.feedbackData;
  const handlers = props.updateParent[0];
  return (
    <>
      <button onClick={() => handlers.good()}>{data[0].name}</button>
      <button onClick={() => handlers.neutral()}>{data[1].name}</button>
      <button onClick={() => handlers.bad()}>{data[2].name}</button>
    </>
  );
};
export default Button;
