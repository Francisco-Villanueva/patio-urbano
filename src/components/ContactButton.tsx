import { WhatsAppIcon } from "../icons";

export function ContactButton({ landing = false }: { landing?: boolean }) {
  const phoneNumber = "+59899584944";
  const whatsappURL = `https://wa.me/${phoneNumber}`;

  return landing ? (
    <a
      href={whatsappURL}
      className="px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary/85 flex items-center gap-2"
    >
      <span>Conatctarse</span>
      <WhatsAppIcon width={20} />
    </a>
  ) : (
    <section className="fixed flex flex-col gap-4 bottom-0 right-0 m-6  scale-in-hor-center">
      <a
        className=" bg-green-500 text-white   h-14 w-14 rounded-full grid place-items-center "
        href={whatsappURL}
      >
        <WhatsAppIcon />
      </a>
    </section>
  );
}
