import { ReactNode } from "react";

interface PageLayoutProps {
  id: string;
  mode?: "dark" | "ligth";
  children: ReactNode;
}
export function PageLayout({ children, id, mode }: PageLayoutProps) {
  const bgStyle =
    mode === "dark" ? "bg-blur-black text-white" : "bg-white text-black";
  return (
    <section
      id={id}
      className={`w-full relative flex   ${
        mode === "ligth"
          ? "max-lg:flex-col-reverse "
          : "max-lg:flex-col max-md:justify-center"
      } h-full  backdrop-blur-md  ${bgStyle} max-md:p-4`}
    >
      {children}
    </section>
  );
}
