"use client"
import Sidebar from "@/components/Sidebar";
import Content from "@/components/Content";
import React, { useEffect, useState } from "react";
import MainContext from "./MainContext";
import BrandsData from "./../../src/brands.json";
import Copied from "@/components/Copied";
export default function Home() {

   const brandsArray=[];
    Object.keys(BrandsData).map(key=>{
        brandsArray.push(BrandsData[key]);
    });

    const [brands, setBrands] = useState(brandsArray);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [copied, setCopied] = useState(false);
    const [search, setSearch] = useState("");

    useEffect(()=>{
      setBrands(brandsArray.filter(brand=>brand.title.toLowerCase().includes(search.toLowerCase())))
    },[search])
 
  const data={
    brands,
    setSelectedBrands,
    selectedBrands,
    copied,
    setCopied,
    search,
    setSearch,
  }

  return (
    <div className="flex h-full">
      <MainContext.Provider value={data}>
        <Sidebar />
        <Content />
        {copied && <Copied color={copied}/>}
      </MainContext.Provider>
    </div>
  );
}
