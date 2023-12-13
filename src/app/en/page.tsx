// en
'use client'

import * as React from "react"
import { ModeToggle } from "@/components/theme/theme-provider"
import { useState } from "react"
import Logo from "@/components/Logo"
import { LanguageChanger } from "@/components/Lang"


export default function EnglishPage() {
    return(
        <>
        
        <Header/>
        english
        <Footer/>
        </>
    )
}



function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

    return (
        <div className="flex items-center justify-between border-b border-gray-400 py-8 m-4 dark:bg-gray-900">
        <div className="hidden md:flex">
          <a className="items-center justify-center px-4" href="/">
            <Logo />

          </a>
          <div className="font-sans font-semibold text-3xl">
           <h1> Syrdarya District Medical Association</h1>
          </div> 


          </div>
           
          <nav>
                <section className="MOBILE-MENU flex lg:hidden mx-4">
                    {isNavOpen || 
                    <div
                        className="HAMBURGER-ICON space-y-2"
                        onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
                    >
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                    </div>}
                    

                    <div className={isNavOpen ? "showMenuNav dark:bg-slate-950" : "hideMenuNav"}>
                        <div
                            className="CROSS-ICON absolute top-0 right-0 px-8 py-11 "
                            onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                        >
                            <svg
                                className="h-8 w-8 text-gray-600"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </div>
                        <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                            <li className="border-b border-gray-400 my-8 uppercase">
                                <a onClick={() => setIsNavOpen(false)} href="#about">About Us</a>
                            </li>
                            <li className="border-b border-gray-400 my-8 uppercase">
                                <a onClick={() => setIsNavOpen(false)} href="#hujjatlar">Open data</a>
                            </li>
                            <li className="border-b border-gray-400 my-8 uppercase">
                  <a onClick={() => setIsNavOpen(false)} href="#footer">Contact</a>
                            </li>
                        </ul>
                    </div>
                </section>

                <ul className="DESKTOP-MENU hidden space-x-8 lg:flex ">
                    <li>
              <a href="#about">About Us</a>
                    </li>
                    <li>
                        <a href="#footer">Address</a>
                    </li>
                    <li>
              <a href="#hujjatlar">Documents</a>
                    </li>
                    <li><a href="/news">News</a></li>
                    <li className="px-4">
                        <ModeToggle />
                    </li>
                </ul>
                 <LanguageChanger />
            </nav>
            <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        background-color: white;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
      
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
        </div>
    );
}

export function Footer(){
    return(
        <>
         <div id='footer' className="flex items-center justify-center py-8">


      <div className="mapouter"><div className="gmap_canvas"><iframe src="https://maps.google.com/maps?q=40.82704791336997,%2068.667169331836&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=&amp;output=embed" style={{width: 790, height: 500 }}></iframe>
      <style>{`
      .mapouter{position:relative;height:400px;min-width:375px;background:#fff;}
      `}
      </style>
    
      <style>{`.gmap_canvas{overflow:hidden;height:400px;min-width:375px}.gmap_canvas iframe{position:relative;z-index:2}`}</style></div></div>

      </div>
        
        
       
        <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800 pt-8">
    <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-center flex-col ">
            
           
                  <ul className="flex justify-end  items-end mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#about" className="mr-4 hover:underline md:mr-6 ">About Us</a>
                        </li>
                        <li>
                            <a href="#rahbariyat" className="mr-4 hover:underline md:mr-6">Leadership</a>
                        </li>
                        <li>
                            <a href="#hujjatlar" className="mr-4 hover:underline md:mr-6 ">Prices of services</a>
                        </li>
                        
                    </ul>
                   <div className="flex flex-col ">
                            <p className="text-gray-500">
                              17 Ibn Sina Street, Bahor Makhalla, Syrdarya District, Syrdarya Region
                            </p>
                           ____________________
                            <p className="text-gray-500">
                                            Fax: 67-377-21-75
                                            <br/>
                                            Reception : 67-377-22-41
                                            <br/>
                                            E-mail: sirdaryo_tibbiyot@exat.uz, sirdaryottb@gmail.com
                            </p>
                       </div>
              
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex items-center justify-center">
            <span className="text-sm text-gray-500 text-center dark:text-gray-400">&copy; {new Date().getFullYear()} All rights reserved.
            </span>
            
        </div>
    </div>
</footer>
 </>
    )
}