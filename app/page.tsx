import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { SelectedWork } from "@/components/sections/selected-work";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Proof } from "@/components/sections/proof";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { PageTransition } from "@/components/providers/page-transition";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.name} — ${siteConfig.tagline}`,
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <PageTransition>
      <main>
        <Hero />
        <SelectedWork />
        <Services />
        <Process />
        <Proof />
        <About />
        <Contact />
      </main>
    </PageTransition>
  );
}
