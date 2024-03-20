export function Footer() {
  return (
    <footer className="h-[30%] bg-white p-4       backdrop-blur-none ">
      <div className="flex items-center justify-between  h-full px-24 text-sm ">
        <img
          src="/images/logo.png"
          alt="patio urbano hostel"
          className="w-32"
        />

        <div className="flex gap-8 font-light">
          <div className="flex flex-col gap-2">
            <h2 className="text-green font-bold">Dirección</h2>
            <div className="flex flex-col gap-1">
              <span>Miguel Barreiro 2970 bis, 11300 </span>
              <span>Montevideo, Uruguay</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <h2 className="text-green font-bold">Email</h2>
              <div className="flex flex-col gap-1">
                <span>patiourbano@gmail.com </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-green font-bold">Contacto</h2>
              <div>
                <span>+59 821016041 </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
