"use client";
import Stack from "@mui/material/Stack";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="w-full h-full">
      <Stack>
        <Header />
        <section className="z-0 bg-cover h-[800px] bg-[url('images/wallpaper-1.jpg')] flex justify-center items-center"></section>
        <Footer />
      </Stack>
    </main>
  );
}
