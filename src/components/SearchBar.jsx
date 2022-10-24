import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "react-feather";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");


  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      searchTerm ? navigate(`/search/${searchTerm}`) : navigate("/");
    }, 700);

    return () => clearTimeout(timeOutId);
  }, [searchTerm]);

  return (
    <form
      //   onSubmit={handleSubmit}
      className="flex md:pr-4 pr-10 text-white focus-within:text-blue-300 mb-4 md:mt-2 mt-4"
      autoComplete="off"
    >
      <label htmlFor="search-field" className="sr-only">
        Search all songs
      </label>
      <div className="flex flex-grow justify-start items-center bg-white/20 rounded-lg">
        <Search className="h-5 w-5 ml-5" />
        <input
          name="search-field"
          type="search"
          autoComplete="off"
          id="search-field"
          placeholder="What do you want to listen to?"
          value={searchTerm}
          onChange={handleSearchChange}
          className="flex-1 bg-transparent border-none outline-none
             placeholder-gray-400 text-base text-white px-6 py-2"
        />
      </div>
    </form>
  );
};

export default SearchBar;
