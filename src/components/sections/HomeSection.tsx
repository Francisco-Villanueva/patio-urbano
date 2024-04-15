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
              Buscamos dar un servicio personalizado. Brindar una experiencia
              diferente para un cliente que anhele regresar, o que en su retina
              y su memoria quede el recuerdo de una vivencia genuina y no
              superficial. Ofrecemos la experiencia de una estancia relajante en
              un ambiente íntimo. Con un estilo y un carácter propio. Una mezcla
              perfecta entre entorno, ambiente y exclusividad.
            </p>
            <p className="w-full text-start ">
              Ofrecemos la experiencia de una estancia relajante en un ambiente
              íntimo. Con un estilo y un carácter propio. Una mezcla perfecta
              entre entorno, ambiente y exclusividad.
            </p>
          </div>
        </div>
      </AsideLayout>
    </PageLayout>
  );
}
