import { AsideLayout, PageLayout } from "../../common";
import {
  BedIcon,
  ColdIcon,
  ComunityIcon,
  KitchenIcon,
  ParkingIcon,
  TreeIcon,
  TvIcon,
  WifiIcon,
} from "../../icons";
import { CarouselDemo } from "../Carousel/Carousel";

export function AboutUs() {
  return (
    <PageLayout id="¿Qué ofrecemos?" mode="dark">
      <AsideLayout>
        <div className="w-3/4 h-3/4  text-gray-200 flex flex-col justify-center   pl-32 max-md:pl-0  max-md:gap-2 gap-6 ">
          <div className="flex flex-col  gap-3   ">
            <h2 className="font-bold text-[2rem] max-md:text-xl">
              ¿Qué ofrecemos?
            </h2>
            <div className=" border border-green w-1/4" />
          </div>
          <div className="flex  text-start flex-col gap-4 font-light text-sm max-md:text-xs max-md:grid max-md:grid-cols-2">
            <div className="flex items-center gap-2 text-xl font-semibold max-md:text-sm">
              <BedIcon color="white" />
              <b>Habitaciones Privadas</b>
            </div>
            <div className="flex items-center gap-2">
              <WifiIcon color="white" />
              <b>Wifi</b>
            </div>
            <div className="flex  items-center gap-2">
              <ParkingIcon color="white" />
              <b>Estacionamiento gratuito para birrodados</b>
            </div>
            <div className="flex  items-center gap-2">
              <KitchenIcon />
              <b>Cocina Equipada</b>
            </div>
            <div className="flex  items-center gap-2">
              <ColdIcon />
              <b>Aire acondicionado / calefacción</b>
            </div>
            <div className="flex  items-center gap-2">
              <TvIcon />
              <b>TV en recepción / living</b>
            </div>
            <div className="flex  items-center gap-2">
              <ComunityIcon />
              <b>Áreas comunes</b>
            </div>
            <div className="flex  items-center gap-2">
              <TreeIcon />
              <b>Patio</b>
            </div>
          </div>
        </div>
      </AsideLayout>
      <AsideLayout>
        <section className="w-full h-full flex justify-center items-center  max-md:items-start    ">
          <CarouselDemo
            images={[
              "/hostal/1.jpg",
              "/hostal/2.jpg",
              "/hostal/3.jpg",
              "/hostal/4.jpg",
              "/hostal/5.jpg",
              "/hostal/6.jpg",
            ]}
          />
        </section>
      </AsideLayout>
    </PageLayout>
  );
}
