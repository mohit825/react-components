import React, { createContext, useContext } from "react";

const TabContext = createContext();

const Tabs = ({ onChange, children, currentIndex }) => {
  return (
    <TabContext.Provider value={{ onChange, currentIndex }}>
      {children}
    </TabContext.Provider>
  );
};

Tabs.HeadsContainer = ({ children }) => {
  return <div>{children}</div>;
};

Tabs.Title = ({ label, index }) => {
  const { onChange, currentIndex } = useContext(TabContext);
  const onTabClick = () => {
    onChange(index);
  };
  return (
    <div
      className={`${index === currentIndex ? "underline" : ""}`}
      onClick={onTabClick}
    >
      {label}
    </div>
  );
};

Tabs.ContentContainer = ({ children }) => {
  return <div>{children}</div>;
};

Tabs.Content = ({ children, index }) => {
  const { currentIndex } = useContext(TabContext);

  return index === currentIndex ? <div>{children}</div> : null;
};

export default Tabs;
