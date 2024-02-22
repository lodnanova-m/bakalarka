"use client";
import Link from "next/link";
import { Link as LinkT } from "@/models/models";
import { usePathname } from "next/navigation";
import styles from "./navLink.module.css";
type NavLinkProps = {
  item: LinkT;
};
const NavLink = ({ item }: NavLinkProps) => {
  const pathName = usePathname();
  return (
    <Link
      href={item.path}
      key={item.title}
      className={`${styles.container} ${
        pathName === item.path && styles.active
      }`}
    >
      {item.title}{" "}
    </Link>
  );
};

export default NavLink;
