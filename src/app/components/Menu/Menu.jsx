"use client"

import React from 'react'
import { useEffect,useState,useRef } from 'react'
import Link from 'next/link'
import './Menu.css'

const menuLinks =[
{path:"/", label:"Home" },
{path:"/work", label:"work"},
{path:"/about", label:"about"},
{path:"/contact", label:"contact"},
{path:"/lab", label:"lab"},
];




const menu = () => {

    const container = useRef();
    const [isMenuOpen,setIsMenuOpen]=useState(false);

    const toggleMenu =() =>{
        setIsMenuOpen(!isMenuOpen);
        };
  return (
    <div className='menu-container' ref={container}>
        <div className='menu-bar'>
         <div className='menu-logo'>
            <Link href="/">Codegrid</Link>
         </div>
         <div className='menu-open' onClick={toggleMenu}>
            <p>Menu</p>
         </div>
         <div className='menu-overlay'>
            <div className='menu-overlay-bar'>
                <div className='menu-logo'>
                  <Link href="/">Codegrid</Link>  
                </div>
                <div className='menu-close' onClick={toggleMenu}>
                    <p>Close</p>
                </div>
            </div>
            <div className='menu-close-icon'>
                <p>&#x2715;</p>
            </div>
            <div className='menu-copy'>
                <div className='menu-links'>
                    {menuLinks.map((link,index)=>(
                      <div className='menu-link-item' key={index}>
                        <div className='menu-link-item-holder' onClick={toggleMenu}>
                            <Link href={link.path} className='menu-link'>
                            {link.label}
                            </Link>
                        </div>
                      </div>
                    )) }
                </div>
                <div className='menu-info'>
                    <div className='menu-info-col'>
                        <a href="#">X &#8599;</a>
                        <a href="#">Instagram &#8599;</a>
                        <a href="#">Linkedin &#8599;</a>
                            <a href="#">Behance &#8599;</a>
                            <a href="#">Dribble &#8599;</a>
                    </div>
                    <div className='menu-info-col'>
                        <p>info@codegrid.com</p>
                        <p>2342 232 334</p>
                    </div>
                </div>
            </div>
            <div className='menu-preview'>
                <p>View Showreel</p>
            </div>
         </div>
        </div>
</div>
  )
}

export default menu