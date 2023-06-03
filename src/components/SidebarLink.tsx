"use client";

import { Calendar, Grid, Settings, User } from "react-feather";

import { FC } from "react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

interface SidebarLinkProps {
  link: {
    label: any;
    icon: any;
    link: any;
  };
}
const icons = { Settings, User, Grid, Calendar };

const SidebarLink: FC<SidebarLinkProps> = ({ link }) => {
  const pathname = usePathname();
  let isActive = false;

  if (pathname === link.link) {
    isActive = true;
  }

  const Icon = icons[link.icon];
  return (
    <Link href={link.link}>
      <Icon
        size={40}
        className={clsx(
          "stroke-gray-400 hover:stroke-violet-600 transition duration-200 ease-in-out",
          isActive && "stroke-violet-600"
        )}
      />
    </Link>
  );
};

export default SidebarLink;
