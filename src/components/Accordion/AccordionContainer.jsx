import React from "react";
import Accordion from "./Accordion";

const data = [
  {
    id: 1,
    header: "Javascript",
    description: "I love Javascript",
  },
  {
    id: 2,
    header: "Typescript",
    description: "I love typescript",
  },
  {
    id: 3,
    header: "Node",
    description: "I love Node",
  },
];
const AccordionContainer = () => {
  return <Accordion data={data} />;
};

export default AccordionContainer;
