import React from "react";

const Content = (props) => {
  const Part = (props) => {
    return (
      <>
        {props.data.parts.map((data) => (
          <p>
            {data.name}: {data.exercises}{" "}
          </p>
        ))}
      </>
    );
  };
  return (
    <>
      <Part {...props} />
    </>
  );
};

export default Content;
