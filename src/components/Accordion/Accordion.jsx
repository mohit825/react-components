import React, { useState } from "react";

const Accordion = ({ data }) => {
  const [selectedAccordion, setSelectedAccordion] = useState(data[0]);

  const onAccordionHeaderClicked = (accord) => {
    if (accord?.id === selectedAccordion?.id) {
      setSelectedAccordion(null);
    } else {
      setSelectedAccordion(accord);
    }
  };
  return (
    <>
      <div className="text-center">Accordion</div>
      <div>
        {data.map((accord) => {
          const { id, header } = accord;
          return (
            <main key={id} className="w-[50%] m-auto">
              <div
                className="bg-slate-200 p-2 flex justify-between cursor-pointer"
                onClick={() => onAccordionHeaderClicked(accord)}
              >
                {header}
                <i>{id === selectedAccordion?.id ? "⬆️" : "⬇️"} </i>
              </div>
              {id === selectedAccordion?.id && (
                <p className="p-2">{selectedAccordion?.description}</p>
              )}
            </main>
          );
        })}
      </div>
    </>
  );
};

export default Accordion;
