import "./App.css";
import "../src/styles/Animista.css";
import {
  AboutUs,
  ContactButton,
  Footer,
  HomeSection,
  Navbar,
} from "./components";
import { CryptoInfo } from "./common";

function App() {
  return (
    <main className=" h-[100vh] scroll-smooth relative  ">
      <Navbar />
      <section className="h-full   w-full  grid place-items-center">
        <div className=" fixed -z-10  ">
          <img
            src="/images/montevideo2.jpeg"
            className="aspect-video  "
            alt="Montevideo Hostel Posadas Noche"
          />
        </div>
        <div className="text-white flex flex-col items-center bg-[rgba(0,0,0,.9)] w-full h-full justify-center gap-2 fixed ">
          <img
            src="/images/logo.png"
            className=" w-1/4 scale-in-hor-center "
            alt="patio urbano sits and beds"
          />
          <CryptoInfo />
        </div>
      </section>
      <HomeSection />
      <AboutUs />
      <Footer />
      <ContactButton />
    </main>
  );
}

export default App;
