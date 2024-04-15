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
    <main className=" h-[100vh] scroll-smooth relative overflow-y  ">
      <Navbar />
      <section className="h-full   w-full  grid place-items-center">
        <div className="bg-black h-full w-full    "></div>
        <img
          src="/images/montevideo2.jpeg"
          className=" fixed top-0 left-0  h-full w-full object-cover "
          alt="Montevideo Hostel Posadas Noche"
        />
        <div className="text-white flex flex-col items-center bg-[rgba(0,0,0,.9)]  w-full h-full justify-center gap-2  fixed">
          <img
            src="/images/logo.png"
            className=" w-1/4 max-md:w-1/2 scale-in-hor-center "
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
