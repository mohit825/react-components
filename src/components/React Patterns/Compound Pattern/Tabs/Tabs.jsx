import { useState } from "react";
import Tabs from "./TabContainer";

export const Tab = () =>{
     const [currentIndex, setCurrentIndex] = useState(0);

  const onTabChange = (currIndex) => {
    console.log(currIndex);
    setCurrentIndex(currIndex);
  };
    return (
         <Tabs onChange={onTabChange} currentIndex={currentIndex}>
      <Tabs.HeadsContainer>
        <div className="flex flex-row cursor-pointer bg-slate-400 p-4 gap-4 ">
          <Tabs.Title label="Tab 1" index={0} />
          <Tabs.Title label="Tab 2" index={1} />
          <Tabs.Title label="Tab 3" index={2} />
          <Tabs.Title label="Tab 4" index={3} />
        </div>

        <Tabs.ContentContainer>
          <Tabs.Content index={0}> I am tab 1 content</Tabs.Content>
          <Tabs.Content index={1}> I am tab 2 content</Tabs.Content>
          <Tabs.Content index={2}> I am tab 3 content</Tabs.Content>
          <Tabs.Content index={3}> I am tab 4 content</Tabs.Content>
        </Tabs.ContentContainer>
      </Tabs.HeadsContainer>
    </Tabs>
    )
}