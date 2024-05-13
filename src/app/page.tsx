import { Metadata } from "next";
import Image from "next/image";
import { H1 } from "@/components/ui/H1";
import logo from "@/assets/dsai-logo.png";
import { H2 } from "@/components/ui/H2";
import { Bot } from "lucide-react";

export const metadata: Metadata = {
  title: "CPP DS&AI - Home Page",
};

export default function Home() {
  return (
    <section className="space-y-16 px-1 py-8">
      <section className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2">
        <div className="space-y-3">
          <H1 className="text-center sm:text-start">Welcome to CPP DS&AI!</H1>
          <p className="text-center sm:text-start">
            The Data Science & AI Club (DS&AI) is a student-led organization
            that serves as a central hub for students interested in the data
            sciences and its multifaceted applications in the modern world. We
            aim to fulfill the needs of CPP students by providing opportunities
            to expand personal and professional networks, and hosting events
            with an aim to bolster relevant skills applicable to professional
            development. DS&AI organizes a wide range of initiatives such as
            social gatherings, competitions, development workshops, and
            collaborations with other CPP clubs.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src={logo}
            alt="DSAI Logo"
            height={300}
            width={300}
            className="rounded-full aspect-square border-2 object-cover shadow-md dark:border-foreground"
          />
        </div>
      </section>
      <section className="space-y-3 text-center">
        <H2>
          Ask the chatbot
          <Bot className="inline pb-1" /> anything you want to know!
        </H2>
        <p>
          Click the <Bot className="inline pb-1" /> icon in the top to open the
          chatbot. You can ask the chatbot any question about the club and it
          will get the information from the rest of the website. It can also
          direct you around the page with links leading to the answer of your
          questions like a tour guide!
        </p>
      </section>
    </section>
  );
}
