import { WhatsAppIcon } from "../icons";

export function ContactButton() {
  return (
    <section className="fixed flex flex-col gap-4 bottom-0 right-0 m-6 ">
      <button className=" bg-green text-white   h-14 w-14 rounded-full grid place-items-center ">
        <WhatsAppIcon />
      </button>
    </section>
  );
}
