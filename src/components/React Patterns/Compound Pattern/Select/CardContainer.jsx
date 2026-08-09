import { createContext, useContext } from "react";

const CardContext = createContext();

export const Card = ({ children, countStart, incrementCount }) => {
  return (
    <CardContext.Provider value={{ countStart, incrementCount }}>
      {children}
    </CardContext.Provider>
  );
};

Card.Title = ({ children }) => {
  return <div>{children}</div>;
};

Card.Description = ({ children }) => {
  console.log(children, "child");
  return <div>{children}</div>;
};

Card.Counter = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const ctx = useContext(CardContext);
  console.log(ctx, "hanuman");
  return (
    <div>
      <button onClick={ctx.incrementCount}>Add</button>
      <p>Count value - {ctx.countStart}</p>
    </div>
  );
};
