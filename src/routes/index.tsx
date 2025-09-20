import { createFileRoute } from "@tanstack/react-router";

import { Button } from "../components/button";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Title } from "../components/title";

import logoPrefeitura from "../assets/logo.avif";
import novaOrdem from "../assets/svgs/novaOrden.svg";
import ordensEmAndamento from "../assets/svgs/ordensEmAndamento.svg";
import ordensConcluidas from "../assets/svgs/ordensConcluidas.svg";
import ultimasOrdens from "../assets/svgs/ultimaOrden.svg";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

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
        <div className="flex gap-6 flex-col justify-center col h-screen items-center bg-bg-gray">
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
          <div className="w-[320px]">
            <Button
              title="Relatório"
              redirect="/"
              src={novaOrdem}
              alt="pedrinho"
            />
          </div>
        </div>
        <Footer hasLogo={false}></Footer>
      </div>
    </>
  );
}
