import Gallery, { Gallery3 } from "@/components/gallery/Gallery";
import Image from "next/image";
import Carusel from "@/components/carusel";
import { Questions } from "@/components/Questions";
import { About } from "@/components/About";
import { Suspense } from "react";
import { GetNews } from "@/components/getNews";
import { HeaderUz } from "@/sections/Header";
import { Footer2 } from "@/sections/Footer";
import { Metadata } from "next";
import Direktor from "../../public/direktor.jpg";

export const metadata: Metadata = {
  title: "Sirdaryo tuman tibbiyot birlashmasi",
  description: "Sirdaryo tuman tibbiyot birlashmasi, sirdarya ttb, ssv",
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

export default function Home() {
  return (
    <>
      <HeaderUz />

      <div className="flex flex-col w-full bg-blue-800 p-4 py-20 sm:px-10 sm:flex-row justify-between items-center gap-2">
        <Carusel />

        <p className=" text-white">
          <span className="text-4xl font-medium">
            Biz bilan bog&apos;lanmoqchimisiz?
          </span>
          <br />
          <span className="text-lg">Hoziroq bog&apos;laning ! </span>
        </p>

        <div className="font-medium  pt-4  dark:text-white">
          <div className=" text-white grid gap-4">
            <Image
              className="hover:opacity-75"
              src={Direktor}
              alt={""}
              width={300}
              height={300}
            />
            <h4 className="font-medium leading-none">Faks:</h4>
            <p className="text-white text-sm text-muted-foreground">
              67-377-21-75
            </p>
          </div>
          <div className="text-white grid gap-4">
            <h4 className="font-medium  pt-4 leading-none"> Qabulxona </h4>
            <p className=" text-white text-sm text-muted-foreground">
              67-377-22-41
            </p>
          </div>
        </div>
      </div>

      <main className="flex min-h-screen max-w-auto flex-col items-center justify-between sm:p-24">
        <About />
        <Gallery />
        {/* <Gallery2 /> */}
        <Suspense>
          <h2 className="text-3xl py-8">Yangiliklar</h2>
          <GetNews />
        </Suspense>

        <Questions />

        <Gallery3 />

        {/* <h2 className=" pt-8 text-3xl">Meyoriy hujjatlar</h2>
        <section id="hujjatlar" className="flex flex-row justify-center gap-4 py-8">
          <Link target="_blank" rel="noopener noreferrer" download href='https://drive.google.com/file/d/1MOrcmzP1SAvMn2UugMoCwEQ9ri5ePABn/view?usp=sharing' title="Tashkilot Protokollari">
            <Image src={Protokol} alt={"Protokol"} width={100} height={100} />
          </Link>
          <Link target="_blank" rel="noopener noreferrer" download href='https://drive.google.com/file/d/1w8E1ldyYR2DIbVjiOqUQFPH3Vu_fmmYj/view?usp=drive_link' title="Tashkilot qarori">
            <Image src={Qarori} alt={"qaror"} width={100} height={100} />
          </Link>
          <Link target="_blank" rel="noopener noreferrer" download href='https://drive.google.com/file/d/18HkgtgLjzm_hS1ovyLFgPZaeciI7YreM/view?usp=drive_link' title="Tashkilotda bor hizmatlar narxlari">
            <Image src={Narxlar} alt={"narxlar"} width={120} height={120} />
          </Link>

          <Link target="_blank" rel="noopener noreferrer" download href='https://drive.google.com/file/d/19dPYcRh9OFXDuMQl3ZnAe9m28k6Ay3xz/view?usp=drive_link' title="Tashkilot Nizomlari">
            <Image src={Nizomi} alt={"nizomi"} width={120} height={120} />
          </Link>
          <Link target="_blank" rel="noopener noreferrer" download href='https://drive.google.com/file/d/1kRB9rWfQ6X8ZzLOmISSBRjfrclRTwkT7/view?usp=drive_link' title="Tashkilot Klinik buyruq">
            <Image src={Klinik} alt={"Klinik"} width={120} height={120} />
          </Link>
        </section> */}
      </main>
      <Footer2 />
    </>
  );
}
