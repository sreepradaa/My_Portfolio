"use client";

import dynamic from "next/dynamic";
import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNav";

// Dynamic imports for client-only components
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"), { ssr: false });
const RecentProjects = dynamic(() => import("@/components/RecentProjects"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
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
