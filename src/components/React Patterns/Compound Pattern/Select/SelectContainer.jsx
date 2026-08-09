import { useState } from "react";
import { Card } from "./CardContainer";

export const Select = () => {
  const [count, setCount] = useState(99);
  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <Card countStart={count} incrementCount={incrementCount}>
      <Card.Title>This is card title</Card.Title>
      <Card.Description>This is card description</Card.Description>
      <Card.Counter />
    </Card>
  );
};
