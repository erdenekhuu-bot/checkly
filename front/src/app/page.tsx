"use client";
import Stack from "@mui/material/Stack";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <Stack>
      <Header />
      <section className="z-0 bg-cover h-[800px] bg-[url('images/wallpaper-1.jpg')] flex justify-center items-center">
        <div className="inset-0 bg-white opacity-70 z-0"></div>
        <div className="flex justify-center items-center z-10">
          <div className="text-center">
            <div>
              <b style={{ fontFamily: "Inter" }} className="text-[40px]">
                Авто машины
              </b>
            </div>
            <div>
              <b style={{ fontFamily: "Inter" }} className="text-[40px]">
                боломжит үнийг
              </b>
            </div>
            <div className="">
              <b className="text-[60px]">CHECKLY</b>
            </div>
            <div className="">
              <span>Бид таны машины ханшийг мэдэхэд туслах болно</span>
            </div>
            <div className="my-4">
              <button className="w-[140px] h-[60px] bg-[green] rounded-lg bg-[#33a652]">
                <b className="text-[white]">🖍 Үнэлэх</b>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Stack>
  );
}
