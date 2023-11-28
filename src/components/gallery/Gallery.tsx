import Image from "next/image"
import { Suspense } from "react"
import Direktor from "../../../public/direktor.jpg";
import Y1 from "../../../public/vrach1.jpg";
import Y2 from "../../../public/vrach2.jpg";
import Y3 from "../../../public/vrach3.jpg";
import Y4 from "../../../public/vrach4.jpg";
import Y5 from "../../../public/vrach5.jpg";
import Y6 from "../../../public/vrach6.jpg";
import Y7 from "../../../public/vrach7.jpg";
import Y8 from "../../../public/vrach8.jpg";
import Y9 from "../../../public/vrach9.jpg";
import Y10 from "../../../public/vrach10.jpg";
import Y11 from "../../../public/vrach11.jpg";
import Y12 from "../../../public/vrach12.jpg";
export default function Gallery() {
    return (
        <>
            <div id="About" className="px-3 md:lg:xl:px-40 sm:p-0  border-t border-b py-20 bg-opacity-10">
                <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 sm:grid-cols-2 group ">
                    <div
                        className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                        <span className="p-5 rounded-full bg-red-500 text-white shadow-lg shadow-red-200"><svg
                            xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg></span>
                        <p className="text-xl font-medium text-slate-700 mt-3">Mamnun bemorlar</p>
                        {/* <p className=" hidden sm:flex mt-2 text-sm text-slate-500">Team BrainEdge education is a bunch of highly focused, energetic
                            set of people.</p> */}
                    </div>

                    <div
                        className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                        <span className="p-5 rounded-full bg-orange-500 text-white shadow-lg shadow-orange-200"><svg
                            xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" strokeWidth="1.5">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                        </svg></span>
                        <p className="text-xl font-medium text-slate-700 mt-3">
                           Malakali mutaxassislar</p>
                        {/* <p className="  hidden sm:flex mt-2 text-sm text-slate-500">Know where you stand and what next to do to succeed .</p> */}
                    </div>

                    <div className="p-10 flex flex-col items-center text-center group   md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                        <span className="p-5 rounded-full bg-yellow-500 text-white shadow-lg shadow-yellow-200"><svg
                            xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                        </svg></span>
                        <p className="text-xl font-medium text-slate-700 mt-3">Chet el fuqorolariga hizmat</p>
                        {/* <p className=" hidden sm:flex mt-2 text-sm text-slate-500">Professional Advice for higher education abroad and select the
                            top institutions worldwide.</p> */}
                    </div>


                    <div className="p-10 flex flex-col items-center text-center group   md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
                        <span className="p-5 rounded-full bg-lime-500 text-white shadow-lg shadow-lime-200"><svg
                            xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg></span>
                        <p className="text-xl font-medium text-slate-700 mt-3">Ish tajribasi</p>
                        {/* <p className=" hidden sm:flex mt-2 text-sm text-slate-500">Yet another year ! Yet another jewel in our crown!</p> */}
                    </div>

                    <div className="p-10 flex flex-col items-center text-center group    md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
                        <span className="p-5 rounded-full bg-teal-500 text-white shadow-lg shadow-teal-200"><svg
                            xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg></span>
                        <p className="text-xl font-medium text-slate-700 mt-3">Mas&apos;ulliyatli yondashuv</p>
                        {/* <p className=" hidden sm:flex mt-2 text-sm text-slate-500">Get Topic-Wise Tests, Section- Wise and mock tests for your
                            preparation.</p> */}
                    </div>

                    <div className="p-10 flex flex-col items-center text-center group     hover:bg-slate-50 cursor-pointer">
                        <span className="p-5 rounded-full bg-indigo-500 text-white shadow-lg shadow-indigo-200"><svg
                            xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg></span>
                        <p className="text-xl font-medium text-slate-700 mt-3">Xavfsizlik</p>
                        <p className="  hidden sm:flex mt-2 text-sm text-slate-500">
                        </p>
                    </div>




                </div>
            </div></>
    )
}


export function Gallery2(){
    return(
        <>
            <div className="bg-gray-100 md:p-16 mt-20">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">

                        <a href="#"
                            className="relative flex h-full flex-col rounded-md border border-gray-200 bg-white p-2.5 hover:border-gray-400 sm:rounded-lg sm:p-5">
                            <span className="text-md mb-0 font-semibold text-gray-900 hover:text-black sm:mb-1.5 sm:text-xl">
                                Frontend Performance
                            </span>
                            <span className="text-sm leading-normal text-gray-400 sm:block">
                                Detailed list of best practices to improve your frontend performance
                            </span>
                        </a>
                        <a href="#"
                            className="relative flex h-full flex-col rounded-md border border-gray-200 bg-white p-2.5 hover:border-gray-400 sm:rounded-lg sm:p-5">
                            <span className="text-md mb-0 font-semibold text-gray-900 hover:text-black sm:mb-1.5 sm:text-xl">
                                API Security
                            </span>
                            <span className="text-sm leading-normal text-gray-400 sm:block">
                                Detailed list of best practices to make your APIs secure
                            </span>
                        </a>
                        <a href="#"
                            className="relative flex h-full flex-col rounded-md border border-gray-200 bg-white p-2.5 hover:border-gray-400 sm:rounded-lg sm:p-5">
                            <span className="text-md mb-0 font-semibold text-gray-900 hover:text-black sm:mb-1.5 sm:text-xl">
                                Code Reviews
                            </span>
                            <span className="text-sm leading-normal text-gray-400 sm:block">
                                Detailed list of best practices for effective code reviews and quality
                            </span>
                        </a>
                        <a href="#"
                            className="relative flex h-full flex-col rounded-md border border-gray-200 bg-white p-2.5 hover:border-gray-400 sm:rounded-lg sm:p-5">
                            <span className="text-md mb-0 font-semibold text-gray-900 hover:text-black sm:mb-1.5 sm:text-xl">
                                AWS
                            </span>
                            <span className="text-sm leading-normal text-gray-400 sm:block">
                                Detailed list of best practices for Amazon Web Services (AWS)
                            </span>
                        </a>
                        <a href="#"
                            className="relative flex h-full flex-col rounded-md border border-gray-200 bg-white p-2.5 hover:border-gray-400 sm:rounded-lg sm:p-5">
                            <span className="text-md mb-0 font-semibold text-gray-900 hover:text-black sm:mb-1.5 sm:text-xl">
                                AWS
                            </span>
                            <span className="text-sm leading-normal text-gray-400 sm:block">
                                Detailed list of best practices for Amazon Web Services (AWS)
                            </span>
                        </a>
                        <a href="#"
                            className="relative flex h-full flex-col rounded-md border border-gray-200 bg-white p-2.5 hover:border-gray-400 sm:rounded-lg sm:p-5">
                            <span className="text-md mb-0 font-semibold text-gray-900 hover:text-black sm:mb-1.5 sm:text-xl">
                                AWS
                            </span>
                            <span className="text-sm leading-normal text-gray-400 sm:block">
                                Detailed list of best practices for Amazon Web Services (AWS)
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}


export function Gallery3(){
    return(
        <>
        <Suspense>
            <h2 id='rahbariyat' className="text-3xl py-8">Rahbariyat</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4 max-w-[720px]">
                <div>
                    <Image className="hover:opacity-75" src={Direktor} alt={""} width={250} height={250}/>
                    <h3 className=" font-semibold">Tursunov Baxrom Sagdullayevich</h3>
                    <p className="text-gray-500">Bosh shifokor</p>
                    <p className="text-gray-500">Qabul vaqti 13:00-16:00</p>    
                </div>
            
                <div>
                    <Image className="hover:opacity-75" src={Y1} alt={""} width={250} height={250}/>
                    <h3 className=" font-semibold">Mamatkulov Qaxramon Sharopboyevich</h3>
                    <p className="text-gray-500">Gepatolog</p>
                    <p className="text-gray-500">Qabul vaqti 08:00-14:00</p>
                </div>
            <div>
                 <Image className="hover:opacity-75" src={Y2} alt={""} width={250} height={250}/>
                 <h3 className=" font-semibold">Boyoturayev Sherzod</h3>
                    <text><br/></text>
            </div>
             <div>
                 <Image className="hover:opacity-75" src={Y3} alt={""} width={250} height={250}/>
                  <h3 className=" font-semibold">Xomidov Faxriddin</h3>
                    <p className="text-gray-500"></p>
            </div>
             <div>
                <Image className="hover:opacity-75" src={Y4} alt={""} width={225} height={225}/>
                 <h3 className=" font-semibold">Asrorkulov Umedjon</h3>
                    <p className="text-gray-500"></p>
            </div>
             <div>
                <Image className="hover:opacity-75" src={Y5} alt={""} width={250} height={250}/>
                 <h3 className=" font-semibold">Salomatova Sanobar Shodmonovna</h3>
                    <p className="text-gray-500"></p>
            </div>
            <div>
                <Image className="hover:opacity-75" src={Y6} alt={""} width={250} height={250}/>
                 <h3 className=" font-semibold">Mamatkulov Safarali Ashirkulovich</h3>
                    <p className="text-gray-500"></p>
            </div>
           
           <div>
                <Image className="hover:opacity-75" src={Y7} alt={""} width={250} height={250}/>
                 <h3 className=" font-semibold">Allanazaro Sayfulla Suyarkulovich</h3>
                    <p className="text-gray-500"></p>
            </div>
           
           <div>
                <Image className="hover:opacity-75" src={Y8} alt={""} width={250} height={250}/>
                 <h3 className=" font-semibold">Jurayeva Manzura Nabiyevna</h3>
                    <p className="text-gray-500"></p>
            </div>
            <div>
                <Image className="hover:opacity-75" src={Y9} alt={""} width={250} height={250}/>
                 <h3 className=" font-semibold">Achildiyev Abduvali Soibnazarovich</h3>
                    <p className="text-gray-500"></p>
            </div>
            <div>
                <Image className="hover:opacity-75" src={Y10} alt={""} width={250} height={250}/>
                 <h3 className=" font-semibold">Berdiyev Muxammad koraboyevich</h3>
                    <p className="text-gray-500"></p>
            </div>
            <div>
                <Image className="hover:opacity-75" src={Y11} alt={""} width={250} height={250}/>
                 <h3 className=" font-semibold">Shavkat jurayev Kurbonovich
</h3>
                    <p className="text-gray-500">pediatr infeksionist</p>
                    <p className="text-gray-500">Qabul vaqti 14:00-16:00</p>  
            </div>
           <div>
                <Image className="hover:opacity-75" src={Y12} alt={""} width={250} height={250}/>
                 <h3 className=" font-semibold">Mirzayeva Maxbuba Chuliboyevna</h3>
                    <p className="text-gray-500"></p>
            </div>
           
           
            
            
            </div>
        </Suspense>
        </>
    )
}