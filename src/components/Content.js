"use client";
import React from "react";
import Search from "./Search";
import MainContext from "@/app/MainContext";
import { useContext } from "react";
import dynamic from "next/dynamic";
import Download from "./Download";

// Dynamic import component dışında tanımlanmalı
const Brand = dynamic(() => import("./Brand"), {
  loading: () => <p>Yükleniyor...</p>,
  ssr: false,
});

const Content = () => {
  const { brands,selectedBrands } = useContext(MainContext);

  return (
    <main className="content flex flex-col w-full h-full bg-[#f8f8f8]">
      <header className="flex w-full header h-[60px] min-h-[60px] border-b border-solid border-[#ccc]">
        <Search />
        {selectedBrands.length !==0 && (<Download />)}
      </header>
      <section className="brands overflow-auto p-6">
        {brands.map((brand, index) => (
          <Brand key={index} brand={brand} />
        ))}
      </section>
    </main>
  );
};

export default Content;
