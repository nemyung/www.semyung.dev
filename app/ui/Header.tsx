"use client";

import Link from "next/link";
import type { ReactNode } from "react";

const ROUTES = [
  {
    pathname: "/writings",
    name: "Writings",
  },
  {
    pathname: "/projects",
    name: "Projects",
  },
] as const;

function Header() {
  return (
    <header className="h-[84px] py-[18px] px-[16px] md:px-[36px] bg-sage-light-2 dark:bg-sage-dark-2">
      <nav className="max-w-[1300px] mx-auto">
        <ol className="md:flex md:gap-[48px] items-center">
          <li>
            <Link
              className="text-sage-light-12 dark:text-sage-dark-12 text-heading-3"
              href="/"
            >
              오세명
            </Link>
          </li>
          <div className="hidden md:flex md:gap-[36px]">
            {ROUTES.map((route) => (
              <li key={route.pathname}>
                <Link
                  className="text-sage-light-11 dark:text-sage-dark-11 text-body-2-medium"
                  href={route.pathname}
                >
                  {route.name}
                </Link>
              </li>
            ))}
          </div>
        </ol>
      </nav>
    </header>
  );
}

export default Header;
