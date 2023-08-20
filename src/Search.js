import { useState, useEffect } from "react";
const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    props.search(searchValue);
  }, [searchValue]);
  return (
    <div>
      <input
        type="text"
        placeholder="Search Value"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;
