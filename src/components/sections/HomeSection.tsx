import { AsideLayout, PageLayout } from "../../common";

export function HomeSection() {
  return (
    <PageLayout id="Nosotros" mode="ligth">
      <AsideLayout>
        <div className="w-3/4 h-3/4 max-md:h-full max-md:w-full    flex relative">
          <section className="h-[90%] w-1/2 flex flex-col justify-around items-center absolute left-0 ">
            <div className=" aspect-square h-1/2 bg-white   rounded-lg ">
              <img
                src="/images/room1.jpg"
                alt="patio urbano habitaciones"
                className="h-full object-contain rounded-md shadow-lg"
              />
            </div>
            <div className=" aspect-square h-1/3  ">
              <img
                src="/images/room2.jpg"
                alt="patio urbano habitaciones"
                className="h-full object-contain rounded-md shadow-lg"
              />
            </div>
          </section>
          <section className="h-[90%] w-1/2 flex flex-col justify-around items-center absolute right-0 bottom-0 ">
            <div className=" aspect-square h-1/2 ">
              <img
                src="/images/living.jpg"
                alt="patio urbano habitaciones"
                className=" object-contain rounded-lg shadow-lg "
              />
            </div>
            <div className=" aspect-square h-1/2 ">
              <img
                src="/images/room3.jpg"
                alt="patio urbano habitaciones"
                className="h-full object-contain rounded-md shadow-lg"
              />
            </div>
          </section>
        </div>
      </AsideLayout>
      <AsideLayout>
        <div className=" flex flex-col justify-center  w-3/4 h-3/4   text-gray-200   gap-6 max-md:gap-2">
          <h2 className="font-bold text-[2.1rem] max-md:text-xl">
            ¿Quiénes somos?
          </h2>
          <div className=" border-[2px] border-green w-1/6" />
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
