import { WhatsAppIcon } from "../icons";

export function ContactButton() {
  const phoneNumber = "+59899584944";
  const whatsappURL = `https://wa.me/${phoneNumber}`;

  return (
    <section className="fixed flex flex-col gap-4 bottom-0 right-0 m-6 ">
      <a
        className=" bg-green text-white   h-14 w-14 rounded-full grid place-items-center "
        href={whatsappURL}
      >
        <WhatsAppIcon />
      </a>
    </section>
  );
}
