"use client"
import React, { useState } from 'react'
import Search from './Search'
import Brand from './Brand';
import MainContext from '@/app/MainContext';
import { useContext } from 'react';

const Content = () => {
    //console.log(BrandsData);
    let code=null;

   const {brands} = useContext(MainContext);

  return (
    <main className='content flex flex-col  w-full h-full bg-[#f8f8f8]'>
        <header className="flex  w-full header h-[60px] min-h-[60px] border-b border-solid border-[#ccc]">
            <Search />
        </header>
        <section className="brands overflow-auto p-6">
            {brands.map((brand,index)=>(
                 <Brand key={index} brand={brand}/>
            ))}
        </section>
        </main>
  )
}

export default Content