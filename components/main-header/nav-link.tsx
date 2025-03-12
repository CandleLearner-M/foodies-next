"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import styles from "./nav-link.module.css";

function NavLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const path = usePathname();

  return (
    <Link href={href} className={path.includes(href) ? styles.active : ""}>
      {children}
    </Link>
  );
}
export default NavLink;
