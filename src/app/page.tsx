import Image from "next/image";
import gymSvg from "../assets/gym.svg";
import logoSvg from "../assets/logo.svg";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section
        id="classe"
        className="mx-auto flex p-4 flex-col h-screen w-full max-w-screen-xl"
      >
        <nav className="w-full mt-8 h-5 flex items-center justify-between ">
          <Link href="/">
            <Image
              className="h-12 w-12"
              src={logoSvg}
              alt="Logomarca da academia"
            />
          </Link>

          <div className="flex gap-8 items-center">
            <Link
              href="classe"
              className="font-bold text-stone-700 hover:text-blue-700 transition-colors"
            >
              Preço
            </Link>
            <Link
              href="classe"
              className="font-bold text-stone-700 hover:text-blue-700 transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="classe"
              className=" font-bold px-5 py-3 text-white bg-blue-700 hover:bg-blue-800 transition-colors rounded-full"
            >
              Começar
            </Link>
          </div>
        </nav>
        <div className="flex mt-20 items-center justify-between w-full ">
          <div className="items-center justify-between">
            <h1 className="text-left text-7xl leading-15 font-black text-stone-800 ">
              Treine na academia dos seus{" "}
              <span className="text-blue-700">sonhos</span>.
            </h1>
            <p className="text-lg text-stone-700 font-bold mt-8">
              Nunca foi tão fácil treinar na academia perfeita.
            </p>
          </div>
          <Image
            className="w-full mt-10 max-w-2xl"
            src={gymSvg}
            alt="Ilustration of a gym."
          />
        </div>
      </section>
    </main>
  );
}
