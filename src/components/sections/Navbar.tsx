import { useEffect, useState } from "react";
import "../../styles/Animista.css";
import NavbarItem from "./NavbarItem";
export function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 750) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className="fixed w-full z-10    top-0 flex justify-center scale-in-ver-top">
      <div
        className={` flex  items-center w-full  px-6 py-2  bg-[rgba(255,255,255,0)] transition-all duration-200    top-0 z-10 ${
          scrolling
            ? " bg-secondary text-black max-md:p-2  justify-between  "
            : "max-md:p-4 justify-center text-secondary"
        } `}
      >
        <div className={`  ${scrolling ? " w-24 max-md:w-1/12 " : "w-0 "}`}>
          {scrolling && (
            <img src="/logo.png" className=" w-full rounded-full  " />
          )}
        </div>
        <div
          className={`flex   ${
            scrolling ? "gap-6" : " gap-10"
          }   max-md:text-xs`}
        >
          {["Nosotros", "¿Qué ofrecemos?", "Location"].map((item) => (
            <NavbarItem item={item} />
          ))}
        </div>
      </div>
    </nav>
  );
}
