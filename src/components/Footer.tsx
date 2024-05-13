import Link from "next/link";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <nav className="max-w-7xl mx-auto flex justify-between gap-3 p-3">
        <p>
          © 2024 Cal Poly Pomona Data Science & AI Club · All Rights Reserved
        </p>
        <Link href="https://www.instagram.com/cppdsai/">
          <Instagram size={32} />
        </Link>
        <Link href="https://www.linkedin.com/company/cpp-data-science-ai-club">
          <Linkedin size={32} />
        </Link>
        <Link href="https://discord.gg/tu7UPu4Bdv">
          <MessageCircle size={32} />
        </Link>
      </nav>
    </footer>
  );
}
