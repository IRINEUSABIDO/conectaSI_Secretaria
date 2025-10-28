import { createFileRoute } from "@tanstack/react-router";

import { Button } from "../components/button";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Title } from "../components/title";
import { Tela_Solicitacao } from "../components/solicitacao"

import logoPrefeitura from "../assets/logo.avif";
import novaOrdem from "../assets/svgs/novaOrden.svg";
import ordensEmAndamento from "../assets/svgs/ordensEmAndamento.svg";
import ordensConcluidas from "../assets/svgs/ordensConcluidas.svg";
import ultimasOrdens from "../assets/svgs/ultimaOrden.svg";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

const teste = [
  {
    categoria: "luz",
    local: "11 de novembro",
    problema: "caiu a luz aq doido",
    solicitacao: "21/08/2025",
    conclusao: "04/09/2025",
  },
  {
    categoria: "rua",
    local: "11 de novembro",
    problema: "rua ta toda cheia de buraco",
    solicitacao: "21/08/2025",
    conclusao: "04/09/2025",
  },
];


function RouteComponent() {
  return (
    <>
      {/* div suprema */}
      <div
        className="flex flex-col border-8 
      "
      >
        {/* header */}
        <header>
          <div className="bg-light-gray">
            <img src={logoPrefeitura} alt="logo da prefeitura HEADER" />
            <Header />

          </div>
        </header>
        {/* o resto */}
        <div className="flex gap-6 flex-col justify-center col min-h-screen h-auto items-center bg-bg-gray">
          <div className="mb-4">
            <Title></Title>
          </div>
          <div className=" w-[320px]">
            <Button
              title="Novas Ordens"
              redirect="/"
              src={novaOrdem}
              alt="pedrinho"
            />
          </div>
          <div className=" w-[320px]">
            <Button
              title="Ordens em andamento"
              redirect="/"
              src={ordensEmAndamento}
              alt="pedrinho"
            />
          </div>
          <div className=" w-[320px]">
            <Button
              title="Ordens Concluídas"
              redirect="/"
              src={ordensConcluidas}
              alt="pedrinho"
            />
          </div>
          <div className="w-[320px]">
            <Button
              title="Últimas Ordens"
              redirect="/"
              src={ultimasOrdens}
              alt="pedrinho"
            />
          </div>
						{ <div>
          {teste.map((dado) => (
            <Tela_Solicitacao
              categoria={dado.categoria}
              local={dado.local}
              problema={dado.problema}
              solicitacao={dado.solicitacao}
              conclusao={dado.conclusao}
            />
          ))}
        </div> }


          <div className="w-[320px]">
            <Button
              title="Relatório"
              redirect="/relatorio/"
              src={novaOrdem}
              alt="pedrinho"
            />
          </div>
	 <div className="w-[320px]">
            <Button
              title="criar conta REMODELED"
              redirect="/criarConta"
              src={ultimasOrdens}
              alt="pedrinho"
            />
          </div>

        </div>
        <Footer hasLogo={false}></Footer>
      </div>
    </>
  );
}
