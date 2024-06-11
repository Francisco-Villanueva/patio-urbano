export function Footer() {
  return (
    <footer className="h-[30%] bg-white border-t     backdrop-blur-none ">
      <div className="flex items-center justify-between max-md:justify-start max-md:gap-8 w-full  h-full px-24 max-md:px-0  ">
        <img
          src="/logo.png"
          alt="patio urbano hostel"
          className="w-52   max-md:w-20"
        />

        <div className="flex max-md:flex-col max-md:gap-2 gap-8 font-light text-sm max-md:text-xs ">
          <div className="flex flex-col gap-2">
            <h2 className="text-green font-bold">Dirección</h2>
            <div className="flex flex-col gap-1">
              <span>Miguel Barreiro 2970 bis, 11300 </span>
              <span>Montevideo, Uruguay</span>
            </div>
          </div>
          <div className="flex md:flex-col gap-2">
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
