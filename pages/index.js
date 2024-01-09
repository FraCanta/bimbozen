import Image from "next/image";
import Logo from "@/public/assets/logo.png";
import Donna from "@/public/assets/donna.png";

export default function Home() {
  return (
    <div className="h-screen w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="flex flex-col items-center justify-center gap-8 lg:gap-14 py-6">
        <Image
          src={Logo}
          className="w-[200px] lg:w-[400px] "
          alt="costruzione"
        />
        <h1 className="text-center text-3xl lg:text-[3.5rem] font-bold uppercase tracking-tight text-[#bcbcbc]">
          Sito in costruzione
        </h1>
      </div>
      <div className="relative">
        <Image
          src={Donna}
          className="w-full h-full lg:h-screen object-contain lg:p-4"
          alt="costruzione"
        />
      </div>
    </div>
  );
}
