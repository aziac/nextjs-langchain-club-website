import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { H3 } from "@/components/ui/H3";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <div className="space-y-3">
        <H1>About</H1>
      </div>
      <div className="space-y-3">
        <H2>Weekly Meetings</H2>
        <H3>Thursdays during U-Hour (12pm - 1pm)</H3>
        <H3>Building 3 Room 2636</H3>
      </div>
      <div className="space-y-3">
        <H2>Membership</H2>
        <H3>You can become a member by attending 3 consecutive meetings</H3>
        <p>
          Being a member means gaining access to the full facilities of the
          club. This means gaining access to curated learning resources for
          learning Data Science and AI, gaining connection with professors for
          research opportunities, and gaining full access to workshop material!
        </p>
      </div>
    </section>
  );
}
