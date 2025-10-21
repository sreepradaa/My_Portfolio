"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
//import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
//import Certifications from "@/components/certifications";

import { FloatingNav } from "@/components/ui/FloatingNav";
import { GrProjects } from "react-icons/gr";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Experience />
        <RecentProjects />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
