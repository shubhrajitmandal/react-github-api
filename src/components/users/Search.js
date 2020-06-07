import React, { useState, useContext } from "react";

import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const { searchUsers, isContent, clearContent } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  const [searchText, setSearchText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (searchText === "") {
      setAlert("Please enter something!", "danger");
    } else {
      searchUsers(searchText);
      setSearchText("");
    }
  };

  const clearUsers = () => {
    clearContent(!isContent);
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Search Users..."
          id="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <input type="submit" id="submit" value="Search" />
      </form>
      {isContent ? (
        <button id="clear" onClick={clearUsers}>
          Clear All
        </button>
      ) : null}
    </div>
  );
};

export default Search;
