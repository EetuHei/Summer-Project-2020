import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Statistics from "./components/statistics/Statistics";

const Unicafe = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handeGood = () => {
    setGood(good + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
  };

  const feedbackData = {
    name: "Give feedback",
    footerName: "Statistics",
    renderState: false,
    total: good + neutral + bad,
    feedbackData: [
      { name: "good", value: good },
      { name: "neutral", value: neutral },
      { name: "bad", value: bad },
    ],
  };

  if (good || neutral || bad > 0) feedbackData.renderState = true;
  return (
    <>
      <Header data={feedbackData} />
      <Button
        data={feedbackData}
        updateParent={[
          { good: handeGood, neutral: handleNeutral, bad: handleBad },
        ]}
      />
      <Footer data={feedbackData} />
      <Statistics data={feedbackData} />
    </>
  );
};

export default Unicafe;
