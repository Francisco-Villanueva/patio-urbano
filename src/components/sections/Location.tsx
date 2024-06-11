import { PageLayout } from "../../common";
import { Map } from "../Map/Map";

export function Location() {
  return (
    <PageLayout id="Location" mode="ligth">
      <div className=" flex  gap-6 justify-center max-md:flex-col w-5/6 m-auto h-3/4 max-md:h-[90%]  p-4   rounded-xl">
        <div className="w-1/2 flex flex-col gap-8  max-md:w-full  max-md:text-sm ">
          <h2 className="text-3xl max-md:text-xl font-semibold text-primary ">
            ¿Dónde estamos?
          </h2>
          <div className="w-1/4 border border-primary -mt-5" />
          <span className="font-thin">
            Nos encontramos en{" "}
            <span className="font-bold">
              Miguel Barreiro 2970 bis, barrio "Pocitos", Montevideo, Urugay
            </span>
          </span>

          <section>
            <span>¿Qué podes encontrar cerac de Patio Urbano?</span>
            <ul className="font-semibold pl-4 ">
              <li>- Estamos a 0.6km de la costa ⛱️</li>
              <li>- Estamos a 0.7km del Estadio Centenario 🏟️</li>
              <li>- 5km de "X" lugar</li>
              <li>etc ...</li>
            </ul>
          </section>
        </div>
        <div className=" w-1/2 max-md:w-full   max-md:flex-grow">
          <Map />
        </div>
      </div>
    </PageLayout>
  );
}
