import React, { useState } from "react";
import { TabButton } from "./TabButton";
import { TabContent } from "./TabContent";

export const Tab = () => {
  const [activeTab, setActiveTab] = useState(0);
  const data = [
    {
      title: "Food",
      desc: "Hi from the fod ",
    },
    { title: "Travel", desc: "Hi from the travel " },
    {
      title: "Social",

      desc: "Hi from the social ",
    },
    { title: "Knowledge", desc: "Hi from the knowledge " },
  ];

  return (
    <div>
      <TabButton data={data} setActiveTab={setActiveTab} />
      {<TabContent activeTab={activeTab} data={data[activeTab]} />}
    </div>
  );
};
