import React, { useEffect, useState } from "react";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestionsList, setSuggestionsList] = useState([]);
  const [isSuggestionsVisible, setSuggestionsVisible] = useState(false);
  const [cache, setCache] = useState({});

  const fetchSuggestions = async () => {
    if (cache[searchText]) {
      setSuggestionsList(cache[searchText]);
      console.log("from cache");
      return;
    } else {
      const res = await fetch(
        `https://www.google.com/complete/search?client=firefox&q=${searchText}`
      );
      const data = await res.json();
      setCache((prev) => {
        return {
          ...prev,
          [searchText]: data[1],
        };
      });
      setSuggestionsList(data[1]);
      console.log("from api");
    }
  };

  useEffect(() => {
    const s = setTimeout(() => {
      fetchSuggestions();
    }, 200);
    return () => {
      clearTimeout(s);
    };
  }, [searchText]);
  return (
    <div className="w-96 m-1">
      <input
        type="text"
        className="border black p-1  w-full "
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onFocus={() => setSuggestionsVisible(true)}
        onBlur={() => setSuggestionsVisible(false)}
      />
      {suggestionsList.length > 1 && isSuggestionsVisible && (
        <ul className="border black">
          {suggestionsList.map((list, i) => {
            return (
              <li className="hover:bg-slate-200 cursor-pointer ml-1" key={i}>
                {list}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
