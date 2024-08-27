import Image from "next/image";
import gymSvg from "../assets/gym.svg";
import logoSvg from "../assets/logo.svg";
import Link from "next/link";
import runSvg from "../assets/run.svg";
import plansSvg from "../assets/plans.svg";

export default function Home() {
  return (
    <main>
      <section
        id="classe"
        className="mx-auto flex p-4 flex-col min-h-screen w-full max-w-screen-xl"
      >
        <nav className="w-full mt-8 flex flex-col md:flex-row items-center justify-between">
          <Link href="/">
            <Image
              className="h-12 w-12"
              src={logoSvg}
              alt="Logomarca da academia"
            />
          </Link>

          <div className="links flex gap-4 items-center mt-4 md:mt-0">
            <Link
              href="#classe"
              className="font-bold text-stone-700 hover:text-blue-700 transition-colors"
            >
              Preço
            </Link>
            <Link
              href="#classe"
              className="font-bold text-stone-700 hover:text-blue-700 transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="#classe"
              className="cta-button font-bold px-5 py-3 text-white bg-blue-700 hover:bg-blue-800 transition-colors rounded-full "
            >
              Começar
            </Link>
          </div>
        </nav>

        <div className="flex mt-20 flex-col md:flex-row items-center justify-between w-full">
          <div className="items-center justify-between text-center md:text-left">
            <h1 className="text-4xl md:text-7xl leading-tight md:leading-15 font-black text-stone-800">
              Treine na academia dos seus{" "}
              <span className="text-blue-700">sonhos</span>.
            </h1>
            <p className="text-lg text-stone-700 font-bold mt-8">
              Nunca foi tão fácil treinar na academia perfeita.
            </p>
          </div>
          <Image
            className="w-full mt-10 max-w-full md:max-w-2xl"
            src={gymSvg}
            alt="Ilustração de uma academia."
          />
        </div>

        <div className="mt-20 flex flex-col md:flex-row items-center justify-between">
          <Image
            className="w-full max-w-full md:max-w-xl"
            src={runSvg}
            alt="Ilustração de uma pessoa correndo."
          />
          <div className="mt-10 md:ml-10 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold text-stone-800">
              Corrida é o seu forte?
            </h2>
            <p className="text-lg text-stone-700 mt-4">
              Alcance seus objetivos com nossos planos de corrida
              personalizados, tudo isso dentro do aplicativo da nossa academia,
              o famoso "GYM Strong". Com ele você pode treinar onde quiser sem
              sair do foco dos seus objetivos.
            </p>
          </div>
        </div>

        <div className="mt-20 flex justify-center">
          <Image
            className="w-full max-w-full md:max-w-2xl"
            src={plansSvg}
            alt="Ilustração dos planos da academia."
          />
        </div>

        <footer className="mt-20 p-8 bg-stone-100 w-full">
          <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">
            <div className="md:w-1/3">
              <h3 className="text-2xl font-bold text-stone-800">Sobre</h3>
              <p className="text-stone-700 mt-4">
                Projeto de uma landing-page fictícia para uma academia, feita
                somente para fins de estudo e prática de desenvolvimento web.
              </p>
            </div>
            <div className="md:w-1/4">
              <h3 className="text-2xl font-bold text-stone-800">Contato</h3>
              <p className="text-stone-700 mt-4">
                Email: naoexiste@example.com <br />
                Telefone: (123) 456-7890
              </p>
            </div>
            <div className="md:w-1/4">
              <h3 className="text-2xl font-bold text-stone-800">Localização</h3>
              <p className="text-stone-700 mt-4">
                Rua X, 123 <br />
                Cidade Y, EX 123
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between mt-12 border-t pt-8">
            <div className="flex items-center">
              <Image
                className="h-8 w-8"
                src={logoSvg}
                alt="Logomarca da academia"
              />
              <span className="text-lg font-bold text-stone-800 ml-4">
                GYM Strong
              </span>
            </div>
            <p className="text-stone-700 mt-4 md:mt-0">
              © 2024 GYM Strong. Todos os direitos reservados.
            </p>
            <p className="text-stone-700 mt-4 md:mt-0">
              Criado por Lucas Gheno
            </p>
          </div>
        </footer>
      </section>
    </main>
  );
}
