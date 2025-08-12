import React, { useState } from 'react'
import { useContext } from 'react'
import MainContext from '@/app/MainContext'
import { GrLink,GrDownload,GrClose } from "react-icons/gr";
const Download = () => {

    const {selectedBrands,setSelectedBrands}=useContext(MainContext);
    const [downloadUrl, setDownloadUrl] = useState(null);

    const getLink=()=>{
        prompt("Here's the URL to share",`http://localhost:3000/collection/${selectedBrands.join(",")}`);
    }

  return (
    <div className='download flex justify-center items-center pr-12 bg-white'>
        
        <div className="actions flex items-center mr-4 w-10 h-10  justify-center ">
          <a className='mr-4 w-5 h-5 cursor-pointer' href={downloadUrl}><GrDownload /></a>
          <button onClick={getLink} className='cursor-pointer'><GrLink /></button>

        </div>

        <button onClick={()=>setSelectedBrands([])} className='text-[#999] mr-[5px] cursor-pointer'><GrClose className='h-3.5'/></button>
        <div onClick={()=>setSelectedBrands([])} className='selected flex justify-center items-center text-[14px] font-medium text-[#999] cursor-pointer'>{selectedBrands.length} <p className='text-[14px] font-medium text-[#999] ml-0.5 cursor-pointer'> brands </p></div>
        <div onClick={()=>setSelectedBrands([])} className='text-[14px] font-medium text-[#999] ml-0.5 cursor-pointer'> Collacted</div>

        </div>
  )
}

export default Download