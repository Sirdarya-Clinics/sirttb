import { GetNews } from "@/components/getNews";
import Footer from "@/sections/Footer";
import { HeaderUz } from "@/sections/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sirdaryo tuman tibbiyot birlashmasi Yangiliklar",
  description: "Sirdaryo tuman tibbiyot birlashmasi Yangiliklar",
  keywords: [
    "ttb",
    "sogliqni saqlash",
    "Yangiliklar",
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

export default async function NewsPage() {
  return (
    <>
      <HeaderUz />
      <div className="flex flex-col  items-center ">
        <GetNews />
      </div>
      <Footer />
    </>
  );
}
