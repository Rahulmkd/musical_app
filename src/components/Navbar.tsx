"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <div className="flex items-center justify-between gap-20">
          <Link href={"/"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Home"
            ></MenuItem>
          </Link>

          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/#Hero">Musical Items</HoveredLink>
              <HoveredLink href="#FeaturedCards">
                Basic Music Theory
              </HoveredLink>
              <HoveredLink href="/#ChooseScroll">
                Advanced Composition
              </HoveredLink>
              <HoveredLink href="/#Webinar">UpcamingWebinar</HoveredLink>
              <HoveredLink href="/#Instructors">Instructors</HoveredLink>
            </div>
          </MenuItem>
          <Link href={"/contact"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Contact Us"
            ></MenuItem>
          </Link>
        </div>
      </Menu>
    </div>
  );
};

export default Navbar;
