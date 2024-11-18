'use client';

import Image from "next/image";
import gymSvg from "../assets/gym.svg";
import logoSvg from "../assets/logo.svg";
import Link from "next/link";
import runSvg from "../assets/run.svg";
import plansSvg from "../assets/plans.svg";
import PricingCard from "@/components/PricingCard";
import { useState, FormEvent } from "react"

export default function Home() {
  const [email, setEmail] = useState<string>('');
  const [feedback, setFeedback] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch('https://REGION-PROJECT_ID.cloudfunctions.net/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: 'lucasgheno600@gmail.com',
          body: feedback,
          name: email,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('Seu feedback foi enviado com sucesso!');
      } else {
        setMessage(`Erro: ${result.error || 'Não foi possível enviar o feedback.'}`);
      }
    } catch (error) {
      console.error(error);
      setMessage('Erro ao conectar ao servidor.');
    } finally {
      setIsLoading(false);
    }
  };
  
  return ( 
    <main>
      <section
        id="home"
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
            <a
              href="#sobre"
              className="font-bold text-stone-700 hover:text-blue-700 transition-colors"
            >
              Sobre
            </a>
            <a
              href="#precos"
              className="font-bold text-stone-700 hover:text-blue-700 transition-colors"
            >
              Planos
            </a>
            <a href="#feedback"
              className="font-bold text-stone-700 hover:text-blue-700 transition-colors"
            >
              Feedback 
            </a>

            <a
              href="https://www.clickjogos.com.br/jogos-de-casual/vestir-meninas-da-fitness"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button font-bold px-5 py-3 text-white bg-blue-700 hover:bg-blue-800 transition-colors rounded-full "
            >
              Começar
            </a>
          </div>
        </nav>

        <div className="flex mt-20 flex-col md:flex-row items-center justify-between w-full">
          <div className="items-center justify-between text-center md:text-left">
            <h1 className="text-4xl md:text-7xl leading-tight md:leading-15 font-black text-stone-800">
              Treine na academia dos seus{" "}
              <span className="text-blue-700">sonhos</span>.
            </h1>
            <p className="text-lg text-stone-700 font-bold mt-8">
              A academia perfeita para você, sem complicação.
            </p>
          </div>
          <Image
            className="w-full mt-10 max-w-full md:max-w-2xl"
            src={gymSvg}
            alt="Ilustração de uma academia."
          />
        </div>

        <div
          id="sobre"
          className="mt-20 flex flex-col md:flex-row items-center justify-between"
        >
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
        <div id="precos" className="mt-4">
        <h2 className="text-3xl font-bold text-blue-700 text-center">
          Nossos Planos
              </h2>
            <div className="flex justify-center">
              <Image
              className="w-full max-w-full md:max-w-2xl"
              src={plansSvg}
              alt="Ilustração dos planos da academia."
            />
            </div>
              <div className="flex flex-col md:flex-row justify-center gap-8">
              <PricingCard
                    title="Plano Básico"
                    description="Ideal para quem está começando e quer treinar 3 vezes por semana."
                    price="R$ 99,90/mês"
                  />
                  <PricingCard
                    title="Plano Intermediário"
                    description="Perfeito para quem já tem alguma experiência e treina 5 vezes por semana."
                    price="R$ 149,90/mês"
                  />
                  <PricingCard
                    title="Plano Premium"
                    description="O pacote completo com acesso ilimitado e acompanhamento personalizado."
                    price="R$ 199,90/mês"
                  />
           </div>
        </div>
        <div id="feedback" className="mt-20">
          <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">
            Deixe seu Feedback!
          </h2>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
              <label htmlFor="email" className="block text-stone-700 font-bold mb-2">
                Seu Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
                placeholder="seuemail@exemplo.com"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="feedback" className="block text-stone-700 font-bold mb-2">
                Seu Feedback:
              </label>
              <textarea
                id="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
                placeholder="Digite seu feedback aqui..."
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-md transition-colors ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? 'Enviando...' : 'Enviar'}
            </button>
          </form>
          {message && (
            <p className={`mt-4 text-center font-bold ${
              message.includes('sucesso') ? 'text-green-600' : 'text-red-600'
            }`}>
              {message}
            </p>
          )}
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
              Criado por Lucas C Gheno
            </p>
          </div>
        </footer>
      </section>
    </main>
 );
}

