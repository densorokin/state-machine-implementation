import cls from "./Navbar.module.scss";
import type { ReactNode } from "react";

interface NavbarProps {
  children: ReactNode;
}

export const Navbar = ({ children }: NavbarProps) => {
  return <div className={cls.navbar}>{children}</div>;
};
