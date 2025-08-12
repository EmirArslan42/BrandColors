import React from "react";
import { GrSearch } from "react-icons/gr";
import { useContext } from "react";
import MainContext from "@/app/MainContext";

const Search = () => {
  const {Search,setSearch}=useContext(MainContext);
  return (
    <div className="search flex flex-row  items-center  w-[100%] px-3 bg-white">
      <div className="icon flex flex-row  items-center  w-[80%]">
        <GrSearch className="w-5 h-5"/>
       <input
        className="w-full px-3 focus:outline-none"
        placeholder="Search Brands.."
        onChange={(text)=>setSearch(text.target.value)}
      />
      </div>
    </div>
  );
};

export default Search;
