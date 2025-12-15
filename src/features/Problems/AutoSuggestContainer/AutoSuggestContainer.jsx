import { useEffect, useState } from "react";
import { ListItems } from "./ListItems";
import { useCustomFetch } from "./hooks/useCustomFetch";

const DELAY = 300;

export const AutoSuggestContainer = () => {
  const [inputVal, setInputVal] = useState("");
  const [suggestionItems, setSuggestionItems] = useState([]);
  const { error, loading, results } = useCustomFetch(
    `https://dummyjson.com/products/search?q=${inputVal}`,
    300
  );
  // const fetchSuggestions = async (str) => {
  //   const res = await fetch(`https://dummyjson.com/products/search?q=${str}`);
  //   const data = await res.json();

  //   setSuggestionItems(data.products);
  // };

  // useEffect(() => {
  //   let timer;
  //   if (inputVal) {
  //     timer = setTimeout(() => {
  //       fetchSuggestions(inputVal);
  //     }, DELAY);

  //     return () => {
  //       clearTimeout(timer);
  //     };
  //   }
  // }, [inputVal]);

  console.log(error, loading, results, "kokoko");

  return (
    <>
      <div className="card bg-slate-200 flex justify-center flex-col w-[30rem] m-auto">
        <p className="font-md">Auto Suggest Component</p>
        <input
          className="h-[45px]"
          type="text"
          value={inputVal}
          placeholder="Search Something..."
          onChange={(e) => setInputVal(e.target.value)}
        />
        {inputVal && <ListItems items={results} />}
      </div>
    </>
  );
};
