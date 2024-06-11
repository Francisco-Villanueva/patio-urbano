import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export function CarouselDemo({ images }: { images: string[] }) {
  return (
    <Carousel className="max-md:w-sm    max-w-lg">
      <CarouselContent>
        {images.map((image, i) => (
          <CarouselItem key={i}>
            <img
              src={image}
              alt={`Slide `}
              className="rounded-xl max-md:h-[250px] mx-auto"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
