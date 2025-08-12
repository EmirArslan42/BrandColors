"use client";
import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { GrClose } from "react-icons/gr";

// Modal.setAppElement('#root');
const Sidebar = () => {

  const [modalIsOpen, setModelIsOpen] = useState(false);

 function toggleModel() {
    setModelIsOpen(!modalIsOpen);
  }
  return (
    <div id='root' className=' h-full'>
        <aside className='sidebar w-[320px] min-w-[320px] h-full border-r-[1px] border-solid border-r-[#ccc] p-6 '>
            <div className="logo mb-[25px]">
            <a href="" className='text-[30px]'>Brand<b>Colors</b></a>
        </div>
        <div className="description text-[18px] leading-[1.7] text-[#999] mb-[25px]">
            The biggest collection of official brand color codes around. Curated by @brandcolors and friends.
        </div>
        <nav className="menu">
            <ul>
                <li>
                    <a onClick={toggleModel} className='font-semibold text-[#333] block hover:text-[#0099a5] hover:cursor-pointer'>About BrandColors</a>
                </li>
            </ul>
        </nav>
        </aside>

        <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModel}
        contentLabel="Example Modal"
        className="about-modal"
        overlayClassName="about-modal-overlay"
      >
        <button  onClick={toggleModel}><GrClose className='absolute top-7 right-7 w-[20px] h-[20px] cursor-pointer'/></button>
        <h3 className='text-[26px] mb-[20px]'>About BrandColors</h3>
        <p className='text-[18px] leading-[1.8] mb-[20px]'>BrandColors was created by DesignBombs. The goal was to create a helpful reference for the brand color codes that are needed most often.</p>
        <p>It's been featured by Smashing Magazine, CSS-Tricks, Web Design Depot, Tuts+, and over 2 million pageviews. There are now over 600 brands with 1600 colors and the collection is always growing.</p>
      </Modal>

    </div>
  )
}

export default Sidebar