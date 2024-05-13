import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { H3 } from "@/components/ui/H3";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kaggle Teams",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <div className="space-y-3">
        <H1>Kaggle Teams</H1>
      </div>
      <div className="space-y-3">
        <p>
          DS&AI is now recruiting club members to be part of the official DS&AI
          Kaggle Team. As a team member, you will be responsible for finding a
          dataset and entering a competition on the Kaggle website. On top of
          you entering the competition and at the end of the semester, you will
          also present your findings to DS&AI and their guests. The type of
          dataset and competition you choose is completely up to you, but we do
          recommend a file that is interesting to YOU.
        </p>
      </div>
    </section>
  );
}
