import { useEffect, useState } from "react";
import "../../styles/Animista.css";
export function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
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
        className={` flex justify-between items-center w-full px-6 py-2  bg-[rgba(255,255,255,0)] transition-all duration-200  text-white  top-0 z-10 ${
          scrolling ? " bg-black" : ""
        } `}
      >
        <div className="w-1/12 h-[12vh]">
          {scrolling && <img src="/images/logo.png" className=" w-full " />}
        </div>
        <div className="flex gap-4 text-gray-500">
          {["Nosotros", "¿Qué ofrecemos?", "Location"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="cursor-pointer font-semibold transition-all duration-200 hover:font-bold"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
