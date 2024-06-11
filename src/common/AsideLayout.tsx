import { ReactNode } from "react";

interface AsideLayoutProps {
  mode?: "dark" | "ligth";
  children: ReactNode;
}
export function AsideLayout({ children }: AsideLayoutProps) {
  return (
    <aside className="w-1/2 max-md:w-full   max-md:h-1/2  grid place-items-center    ">
      {children}
    </aside>
  );
}
