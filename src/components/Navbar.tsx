"use client";
import Link from "next/link";
import TextScramble from "./TextScramble";
import { animate } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  const pathname = usePathname();

  const handleHomeClick = () => {
    if (pathname === "/") {
      animate(window.scrollY, 0, {
        duration: 1,
        onUpdate: (latest) => window.scrollTo(0, latest),
      });
    } else {
      router.push("/");
    }
  };

  return (
    <nav className="fixed top-0 w-full z-[1001] px-6 py-6 select-none mix-blend-exclusion">
      {/* ================= MOBILE NAV (single line) ================= */}
      <div className="md:hidden w-full flex items-center justify-between whitespace-nowrap px-2">
        {/* Left — AKSHAT */}
        <span onClick={handleHomeClick} className="nav-txt cursor-pointer">
          <TextScramble enterText="PRINCE" />
        </span>

        {/* Center — ABOUT + YEAR */}
        <div className="flex items-center gap-x-4">
          <Link href="/about" className="nav-txt">
            <TextScramble enterText="ABOUT" />
          </Link>
          <span className="nav-txt">@{currentYear}</span>
        </div>

        {/* Right — SOCIALS */}
        <div className="flex items-center gap-x-4">
          <a
            href="https://codolio.com/profile/PrinceCode07io"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-txt"
          >
            CODOLIO
          </a>
          <a
            href="https://linkedin.com/in/prince-jha-10b942230"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-txt"
          >
            LN
          </a>
          <a href="mailto:princejha4477@gmail.com" target="_blank" rel="noopener noreferrer" className="nav-txt">
            <TextScramble enterText="MAIL" />
          </a>
          <a
            href="https://drive.google.com/file/d/1oBgRof0010SOmyufXReDQ10KvE46LibO/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-txt"
          >
            <TextScramble enterText="RESUME" />
          </a>
        </div>
      </div>

      {/* ================= DESKTOP NAV (unchanged) ================= */}
      <ul className="relative w-full h-full hidden md:block">
        {/* LEFT — AKSHAT */}
        <li className="absolute left-0 top-1/2 -translate-y-1/2">
          <span onClick={handleHomeClick} className="nav-txt cursor-pointer">
            <TextScramble enterText="PRINCE" />
          </span>
        </li>

        {/* CENTER — ABOUT + YEAR */}
        <li className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center gap-x-18">
            <div className="w-[5rem] text-left">
              <Link href="/about" className="nav-txt">
                <TextScramble enterText="ABOUT" />
              </Link>
            </div>
            <span className="nav-txt">@{currentYear}</span>
          </div>
        </li>

        {/* RIGHT — SOCIALS */}
        <li className="absolute right-0 top-1/2 -translate-y-1/2">
          <div className="flex items-center gap-x-6">
            <div className=" w-[4.5rem] text-left">
              <a
                href="https://codolio.com/profile/PrinceCode07io"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-txt"
              >
                CODOLIO
              </a>
            </div>

            <div className=" w-[2rem] text-left">
              <a
                href="https://linkedin.com/in/prince-jha-10b942230"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-txt"
              >
                LN
              </a>
            </div>
            <div className=" w-[2.7rem] text-left">
              <a href="mailto:princejha4477@gmail.com" target="_blank" rel="noopener noreferrer" className="nav-txt">
                <TextScramble enterText="MAIL" />
              </a>
            </div>
            <div className="w-[3.7rem] text-left">
              <a
                href="https://drive.google.com/file/d/1oBgRof0010SOmyufXReDQ10KvE46LibO/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-txt"
              >
                <TextScramble enterText="RESUME" />
              </a>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
