"use client"

import * as React from "react"
import { ModeToggle } from "@/components/theme/theme-provider"
import { useEffect, useState } from "react"
import Logo from "@/components/Logo"
import { LanguageChanger } from "@/components/Lang"




export function Header2(lang) {
    console.log(lang)
    const [useLang, setLang] = useState({
        "header": "Sirdaryo tuman tibbiyot birlashmasi",
        "about": "Biz haqimizda",
        "open_data": "Ochiq malumotlar",
        "contact": "Bog&apos;lanish"

    })
    useEffect(() => {
        if (lang === 'ru') {
            setLang({
                "header": "Сырдарьинское районное медицинское объединение",
                "about": "О нас",
                "open_data": "Открытые данные",
                "contact": "Контакты"
            })
        } else if (lang === 'en') {
            setLang({
                "header": "Syrdarya regional medical association",
                "about": "About Us",
                "open_data": "Open data",
                "contact": "Contacts"
            })
        }
        console.log(useLang)
    }, [lang]);




    const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

    return (
        <div className="flex items-center justify-between border-b border-gray-400 py-8 m-4 dark:bg-gray-900">
            <div className="hidden md:flex">
                <a className="items-center justify-center px-4" href="/">
                    <Logo />

                </a>
                <div className="font-sans font-semibold text-3xl">
                    <h1> {useLang.header}</h1>
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
                                <a onClick={() => setIsNavOpen(false)} href="#about">{useLang.about}</a>
                            </li>
                            <li className="border-b border-gray-400 my-8 uppercase">
                                <a onClick={() => setIsNavOpen(false)} href="#hujjatlar">{useLang.open_data}</a>
                            </li>
                            <li className="border-b border-gray-400 my-8 uppercase">
                                <a onClick={() => setIsNavOpen(false)} href="#footer">{useLang.contact}</a>
                            </li>
                        </ul>
                    </div>
                </section>

                <ul className="DESKTOP-MENU hidden space-x-8 lg:flex ">
                    <li>
                        <a href="#about">Biz haqimizda</a>
                    </li>
                    <li>
                        <a href="#footer">Manzil</a>
                    </li>
                    <li>
                        <a href="#hujjatlar">Hujjatlar</a>
                    </li>
                    <li><a href="/news">Yangiliklar</a></li>
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