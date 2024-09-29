"use client";
import Image from "next/image";
import Stack from "@mui/material/Stack";

export default function Home() {
  return (
    <main className="w-full h-full">
      <Stack>
        <header className="fixed w-full z-10 p-4 flex justify-between bg-white">
          <div>
            <b className="text-[#14ba1b] text-[30px]">checkly</b>
          </div>
          <div className="flex items-center">
            <div className="w-[120px] text-center py-2 mx-2 cursor-pointer">
              <span>Нүүр хуудас</span>
            </div>
            <div
              id="about_click"
              className="w-[120px] text-center py-2 mx-2 cursor-pointer"
            >
              <span>Бидний тухай</span>
            </div>
            <button
              className="bg-[#33a652] rounded-lg p-2 cursor-pointer"
              onClick={() => {
                alert(123);
              }}
            >
              <span className="text-white">
                <b>Байгууллага</b>
              </span>
            </button>
          </div>
        </header>
        <section className="z-0 bg-cover h-[800px] bg-[url('images/wallpaper-1.jpg')] flex justify-center items-center"></section>
        <footer></footer>
      </Stack>
    </main>
  );
}
