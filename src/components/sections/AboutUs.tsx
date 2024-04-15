import { Slider } from "..";
import { AsideLayout, PageLayout } from "../../common";
import { BedIcon, ParkingIcon, WifiIcon } from "../../icons";

export function AboutUs() {
  return (
    <PageLayout id="¿Qué ofrecemos?" mode="dark">
      <AsideLayout>
        <div className="w-3/4 h-3/4  text-gray-200 flex flex-col justify-center  pl-32 max-md:pl-0  max-md:gap-2 gap-6 ">
          <div className="flex flex-col  gap-3   ">
            <h2 className="font-bold text-[2rem] max-md:text-xl">
              ¿Qué ofrecemos?
            </h2>
            <div className=" border border-green w-1/4" />
          </div>
          <div className="flex  text-start flex-col gap-4 font-light max-md:text-xs">
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
      </AsideLayout>
      <AsideLayout>
        <section className="w-full h-full flex justify-center items-start  ">
          <div className="w-5/6 max-md:w-[80%] h-full  aspect-square  flex relative">
            <Slider
              images={[
                "/images/slider/slide1.jpg",
                "/images/slider/slide2.jpg",
                "/images/slider/slide3.jpg",
                "/images/slider/slide4.jpg",
              ]}
            />
          </div>
        </section>
      </AsideLayout>
    </PageLayout>
  );
}
