// en

import * as React from "react";
import { HeaderEng } from "@/sections/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syrdarya regional medical association",
  description: "Syrdarya regional medical association, sirdarya ttb, ssv",
  keywords: [
    "ttb",
    "sogliqni saqlash",
    "sirdaryo",
    "tibbiyot",
    "salomatlik",
    "bolnitsa sirdaryo",
    "bolnitsa",
    "klinika",
    "kasalliklar",
    "viloyat",
    "infeksion",
    "sirdaryo tuman",
    "tibbiyot birlashmasi",
    "Sirdaryo tuman tibbiyot birlashmasi",
  ],
};

export default function EnglishPage() {
  return (
    <>
      <HeaderEng />
      english
      <Footer />
    </>
  );
}

function Footer() {
  return (
    <>
      <div id="footer" className="flex items-center justify-center py-8">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              src="https://maps.google.com/maps?q=40.82704791336997,%2068.667169331836&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              style={{ width: 790, height: 500 }}
            ></iframe>
            <style>
              {`
      .mapouter{position:relative;height:400px;min-width:375px;background:#fff;}
      `}
            </style>

            <style>{`.gmap_canvas{overflow:hidden;height:400px;min-width:375px}.gmap_canvas iframe{position:relative;z-index:2}`}</style>
          </div>
        </div>
      </div>

      <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800 pt-8">
        <div className="mx-auto max-w-screen-xl">
          <div className="md:flex md:justify-center flex-col ">
            <ul className="flex justify-end  items-end mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#about" className="mr-4 hover:underline md:mr-6 ">
                  About Us
                </a>
              </li>
              <li>
                <a href="#rahbariyat" className="mr-4 hover:underline md:mr-6">
                  Leadership
                </a>
              </li>
              <li>
                <a href="#hujjatlar" className="mr-4 hover:underline md:mr-6 ">
                  Prices of services
                </a>
              </li>
            </ul>
            <div className="flex flex-col ">
              <p className="text-gray-500">
                17 Ibn Sina Street, Bahor Makhalla, Syrdarya District, Syrdarya
                Region
              </p>
              ____________________
              <p className="text-gray-500">
                Fax: 67-377-21-75
                <br />
                Reception : 67-377-22-41
                <br />
                E-mail: sirdaryo_tibbiyot@exat.uz, sirdaryottb@gmail.com
              </p>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="flex items-center justify-center">
            <span className="text-sm text-gray-500 text-center dark:text-gray-400">
              &copy; {new Date().getFullYear()} All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
