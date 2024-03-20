import { Slider } from "..";
import { PageLayout } from "../../common";
import { BedIcon, ParkingIcon, WifiIcon } from "../../icons";

export function AboutUs() {
  return (
    <PageLayout id="¿Qué ofrecemos?" mode="dark">
      <aside className="w-1/2 h-full  grid place-items-center">
        <div className="w-3/4 h-3/4  text-gray-200 flex flex-col justify-center  pl-32   gap-6 ">
          <div className="flex flex-col  gap-3   ">
            <h2 className="font-bold text-[2rem]">¿Qué ofrecemos?</h2>
            <div className=" border border-green w-1/4" />
          </div>
          <div className="flex  text-start flex-col gap-4 font-light">
            <div className="flex items-center gap-2">
              <WifiIcon color="white" />
              <b>Wifi</b>
            </div>
            <div className="flex items-center gap-2">
              <BedIcon color="white" />
              <b>Habitaciones Privadas</b>
            </div>
            <div className="flex  items-center gap-2">
              <ParkingIcon color="white" />
              <b>Estacionamiento gratuito</b>
            </div>
          </div>
        </div>
      </aside>
      <aside className="w-1/2 h-full  grid place-items-center ">
        <div className="w-5/6 aspect-square flex relative">
          <Slider
            images={[
              "/images/slider/slide1.jpg",
              "/images/slider/slide2.jpg",
              "/images/slider/slide3.jpg",
              "/images/slider/slide4.jpg",
            ]}
          />
        </div>
      </aside>
    </PageLayout>
  );
}
