import { useState } from "react";

export function CryptoInfo() {
  const [show, setShow] = useState(false);
  return (
    <div className="   flex flex-col  gap-2 absolute top-10 left-0 m-6">
      <span
        className={`text-sm  font-thin bg-black p-2 rounded-md transition-all duration-300 ${
          show
            ? "translate-x-[0px] opacity-100 "
            : "translate-y-[30%] opacity-0 "
        } `}
      >
        We accept payments by <strong className="font-semibold">Cryptos</strong>
      </span>
      <img
        src="/images/btc.png"
        alt="bitcoin crypto"
        className=" w-[45px]"
        onMouseOver={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      />
    </div>
  );
}
