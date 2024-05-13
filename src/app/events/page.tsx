import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { H3 } from "@/components/ui/H3";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <div className="space-y-3">
        <H1>Events</H1>
      </div>
      <div className="space-y-3">
        <H2>General Meetings</H2>
        <p>
          The content of our general meetings range from hands-on workshops to
          small competitions meant to test your knowledge and skill in data
          science. Most workshops and competitions are still catered towards
          beginners with little to no knowledge to be able to learn with others
          so feel free to come stop by!
        </p>
      </div>
      <div className="space-y-3">
        <H2>Datathons</H2>
        <p>
          One of DS&AI's flagship events are Datathons. Datathons are
          competitions similar in nature to hackathons but with a greater
          emphasis on data analysis. These collaborative events are intended to
          have members apply their data science skills in order to solve
          problems using real world datasets. Participants are required to
          present their findings at the end of the event through a presentation
          to the datathon's judges.
        </p>
      </div>
    </section>
  );
}
