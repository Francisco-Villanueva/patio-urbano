import "./App.css";
import "../src/styles/Animista.css";
import {
  AboutUs,
  ContactButton,
  Footer,
  HomeSection,
  Location,
  Navbar,
} from "./components";
import { useEffect, useState } from "react";
import { CreditCard, CurrencyIcon } from "./icons";

function App() {
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
    <main className=" h-[100vh] scroll-smooth relative overflow-y  ">
      <Navbar />
      <section className="h-full   w-full  grid place-items-center ">
        <div className="bg-black h-full w-full    "></div>
        <img
          src="/images/montevideo.jpg"
          className=" fixed top-0 left-0  h-full w-full object-cover "
          alt="Montevideo Hostel Posadas Noche"
        />
        <div className="text-white flex  justify-center items-center  bg-[rgba(0,0,0,.5)]  w-full h-full     fixed">
          {!scrolling && (
            <section className="flex justify-center gap-10  max-md:flex-col max-md:items-center p-10 max-md:p-4 max-md:h-full  ">
              <img
                src="/logo.png"
                className=" w-1/4 md:h-1/4  max-md:w-1/2 aspect-square scale-in-hor-center rounded-full "
                alt="patio urbano sits and beds"
              />
              <div className="text-left flex flex-col justify-between items-end  w-1/2 max-md:w-full">
                <div className="flex flex-col ">
                  <h1 className="text-5xl font-bold mb-4 max-md:text-2xl">
                    Bienvenido a Patio Urbano
                  </h1>
                  <p className="text-lg max-md:text-xs">
                    Disfruta de una estancia inolvidable en nuestro acogedor
                    refugio. Explora las hermosas playas y la vibrante vida
                    nocturna de Montevideo.
                    <br />
                    <br />
                    Descubre la rica cultura de la ciudad, sus pintorescas
                    calles y su deliciosa gastronomía. Relájate en un ambiente
                    cálido y amigable, y déjate llevar por el encanto único de
                    la capital uruguaya.
                  </p>

                  <div className="flex flex-col gap-2 max-md:items-center   font-semibold text-lg ">
                    <span className="max-md:text-xs">Medios de pago</span>
                    <div className="flex gap-6 items-start text-sm font-light">
                      <div className="flex flex-col items-center  gap-2 max-md:gap-1">
                        <img
                          src="/images/btc.png"
                          alt="bitcoin crypto"
                          className=" w-[45px] max-md:w-[25px]"
                        />
                        <span className="max-md:text-xs">Crypto</span>
                      </div>
                      <div className="flex flex-col items-center  gap-2 max-md:gap-1">
                        <div className=" w-[45px] max-md:w-[25px] aspect-square flex justify-center items-center bg-primary rounded-full">
                          <CreditCard />
                        </div>
                        <span className="max-md:text-xs">Tarjeta</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 max-md:gap-1">
                        <div className=" w-[45px] max-md:w-[25px] aspect-square flex justify-center items-center bg-primary rounded-full">
                          <CurrencyIcon />
                        </div>
                        <span className="max-md:text-xs">Efectivo</span>
                      </div>
                    </div>
                  </div>
                </div>
                <ContactButton landing />
              </div>
            </section>
          )}
        </div>
      </section>
      <HomeSection />
      <AboutUs />
      <Location />

      <Footer />
      {scrolling && <ContactButton />}
    </main>
  );
}

export default App;
