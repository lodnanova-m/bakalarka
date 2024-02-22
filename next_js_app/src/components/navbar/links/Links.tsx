"use client";
import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import { Links as LinksList } from "@/models/models";
import Image from "next/image";

const Links = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {LinksList.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
      </div>
      <button
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
      >
        <Image
          src="/menu_hamburger.svg"
          alt="hamburger menu icon"
          width={30}
          height={30}
        ></Image>
      </button>
      {open && (
        <div className={styles.mobileLinks}>
          {LinksList.map((link) => (
            <NavLink item={link} key={link.title}></NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
