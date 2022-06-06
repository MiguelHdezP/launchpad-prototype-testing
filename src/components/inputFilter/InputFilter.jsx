import React, { useState } from "react";
import "./InputFilter.scss";
import MagnifyingGlass from "../../assets/images/magnifying-glass.png";

//<></>  </>
export default function InputFilter(props) {
  const { inputFn, fnToggle } = props;
  const [searchQuery, setSearchQuery] = useState("");
  let sendEnterClickSearch = (ev) => {
    ev.preventDefault();
    if (fnToggle) inputFn(searchQuery, ev);
  };
  let sendInputSearch = (value) => {
    setSearchQuery(value);
    if (!fnToggle) inputFn(value);
  };
  return (
    <>
      <label htmlFor="js-input-filter" className="input-filter-label">
        Application Search
      </label>
      <input
        type="text"
        id="js-input-filter"
        className="input-filter"
        onChange={(ev) => sendInputSearch(ev.target.value)}
      />
      <button
        id="js-input-filter-button"
        className="input-filter-button"
        onClick={(ev) => sendEnterClickSearch(ev)}
      >
        Search
      </button>
      <span id="js-input-filter-helperText" className="input-filter-helperText">
        Enter three or more characters to narrow your search results.
      </span>
    </>
  );
}
