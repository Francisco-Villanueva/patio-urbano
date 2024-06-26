import { AsideLayout, PageLayout } from "../../common";
import { CarouselDemo } from "../Carousel/Carousel";

export function HomeSection() {
  return (
    <PageLayout id="Nosotros" mode="ligth">
      <AsideLayout>
        <section className="w-full h-full max-md:w-[75%] flex justify-center items-center  max-md:items-start    ">
          <CarouselDemo
            images={[
              "/turismo/4.jpg",
              "/turismo/3.jpg",
              "/turismo/5.jpg",
              "/turismo/6.jpg",
              "/turismo/7.jpg",
            ]}
          />
        </section>
      </AsideLayout>
      <AsideLayout>
        <div className=" flex flex-col justify-center  w-3/4 max-md:w-full h-3/4      gap-6 max-md:gap-2">
          <h2 className="font-bold text-[2.1rem] max-md:text-xl text-primary">
            ¿Quiénes somos?
          </h2>
          <div className=" border  w-1/4 border-primary" />
          <div className="flex  flex-col gap-4 max-md:text-xs ">
            <p className="w-full text-start ">
              Somos un Hostal solo de habitaciones privadas. Ubicados en el
              Barrio Costero Pocitos, al Sur de la Ciudad Montevideana. Nos
              encontramos cercanos a la playa, a diversos locales gastronómicos
              y a una variada red comercial.
            </p>
            <p className="w-full text-start ">
              En Patio Urbano nos distinguimos por ofrecer a nuestros huéspedes,
              tranquilidad y un ambiente descontracturado donde poder llegar a
              descansar.
            </p>
            <p className="w-full text-start ">
              Nuestros visitantes suelen ser parejas, personas solas y pequeños
              grupos familiares que buscan un lugar amigable y seguro donde
              poder compartir experiencias y recargar energías.
            </p>
          </div>
        </div>
      </AsideLayout>
    </PageLayout>
  );
}
