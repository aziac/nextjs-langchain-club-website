import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { H3 } from "@/components/ui/H3";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet the Board",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <div className="space-y-3">
        <H1>Meet the Board</H1>
      </div>
      <div className="space-y-3">
        <H2>President</H2>
        <H3>Joey Cindass</H3>
        <p>
          My name is Joey, computer science undergraduate minoring in statistics
          and data science. The multi-disciplinary foundations of data science
          entails methodologies aimed to gather insights and optimize processes
          that can maximize output with minimal input. I strive to be in the
          forefront of such discoveries, and apply my expertise in industries
          focused on the betterment of society.
        </p>
      </div>
      <div className="space-y-3">
        <H2>Vice President</H2>
        <H3>Nathan</H3>
        <p>
          My name is Nathan and I am a fourth year Computer Science student,
          minoring in Data Science. I am pursuing my Master's in the hopes to
          deepen my knowledge in Artificial Intelligence to make a difference in
          the world. I believe that learning is simply a science in both humans
          and machine.
        </p>
      </div>
      <div className="space-y-3">
        <H2>Secretary</H2>
        <H3>Yunseon Choi</H3>
        <p>
          Hey there! I'm Yunseon Choi, a senior majoring in Computer Science.
          I've got this thing for Data Science and AI- there's just something
          about organizing raw data to create fresh perspectives that really
          excites me. I'm all about that sweet spot where technology meets
          information. As I dive into the world of Computer Science, my goal is
          to use data to push the boundaries and come up with some cool
          solutions.
        </p>
      </div>
      <div className="space-y-3">
        <H2>Treasurer</H2>
        <H3>Olena Molla</H3>
        <p>
          I am deeply interested in data science and AI due to their significant
          impact on industry and society. These fields offer opportunities to
          analyze complex data, develop predictive models, and contribute to
          cutting-edge technological advancements. The versatile skill set and
          the potential to address real-world challenges are compelling reasons
          for my keen interest in data science and AI.
        </p>
      </div>
      <div className="space-y-3">
        <H2>Historian</H2>
        <H3>Colin McGough</H3>
        <p>
          Hey everyone, my name is Colin and I am a third year Computer Science
          major with a Data Science minor. Most of my Computer Science career
          has been focused around web development but I want to explore all that
          the field of Computer Science has to offer. The possibilities of Data
          Science in the future of business coupled with the current
          groundbreaking innovations in AI has shifted my focus into these
          fields.
        </p>
      </div>
    </section>
  );
}
