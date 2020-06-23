import React from "react";
import Stats from "./Stats";
import Total from "./Total";
import Percent from "./Percent";
import Average from "./Average";

const Statistics = (props) => {
  return (
    <>
      {!props.data.renderState ? (
        <>
          <p>No feedback give</p>
        </>
      ) : (
        <>
          <table>
            <tbody>
              <Stats data={props} />
              <Total data={props} />
              <Average data={props} />
              <Percent data={props} />
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default Statistics;
