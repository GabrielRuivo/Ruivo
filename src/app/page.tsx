"use client"; // this is a client component 👈🏽
import Experiences from "@/components/Experiences/Experiences";
// import Header from "@/components/Header/Header";
import Land from "@/pages/Land/Land";
import Services from "@/pages/Services/Services";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* <Header /> */}
      <Land />
      <Experiences />
      <Services />
    </div>
  );
}
