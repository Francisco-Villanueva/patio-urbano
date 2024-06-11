import { PageLayout } from "../../common";
import { Map } from "../Map/Map";

export function Location() {
  return (
    <PageLayout id="Location" mode="ligth">
      <div className="w-5/6 m-auto h-3/4 bg-black/90  p-4 flex  gap-6 justify-center  rounded-xl">
        <div className="w-1/2 flex flex-col gap-8 text-secondary">
          <h2 className="text-3xl font-semibold ">¿Dónde estamos?</h2>
          <div className="w-1/4 border" />
          <span className="font-thin">
            Nos encontramos en{" "}
            <span className="font-bold">
              Miguel Barreiro 2970 bis, barrio "Pocitos", Montevideo, Urugay
            </span>
          </span>

          <i className="text-red-500 text-sm">
            ACA SE PUEDEN PONER DIFERETNES "ATRACCIONES" QUE ESTEN CERCA DEL
            HOSTAL ⬇️
          </i>

          <span>¿Qué podes encontrar cerac de Patio Urbano?</span>
          <ul className="font-semibold pl-4 ">
            <li> Estamos a 0.6km de la costa ⛱️</li>
            <li> Estamos a 0.7km del Estadio Centenario 🏟️</li>
            <li>5km de "X" lugar</li>
            <li>etc ...</li>
          </ul>
        </div>
        <div className=" w-1/2">
          <Map />
        </div>
      </div>
    </PageLayout>
  );
}
