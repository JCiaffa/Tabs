import React, { useState } from "react";
import TabBtn from "./tabBtn";

const Main = () => {
  const nums = [1, 2, 3, 4, 5];

  const [state, setState] = useState({
    //set default selected tab to 1
    selectedTab: 1,
  });

  const tabOnClick = (value) => {
    setState({
      selectedTab: value,
    });
  };

  return (
    <div>
      <h1>Tab List</h1>
      {nums.map((val) => (
        <TabBtn
          onClick={() => tabOnClick(val)}
          //selected is used to change the css in the tabBtn.jsx component
          selected={state.selectedTab === val}
        >
          Tab {val}
        </TabBtn>
      ))}
      <h2>Tab {state.selectedTab} content is showing here.</h2>
    </div>
  );
};
export default Main;
