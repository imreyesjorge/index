"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathName = usePathname();

  return (
    <nav>
      <ul>
        <li className={pathName === "/" && "active"}>
          <Link href="/">Home</Link>
        </li>
        <li className={pathName === "/blog" && "active"}>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
};
