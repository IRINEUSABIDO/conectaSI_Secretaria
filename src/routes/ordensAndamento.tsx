import { createFileRoute } from "@tanstack/react-router";

import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Button_Back } from "../components/buttonBack";
import { SolicitacaoDetails } from "../components/solicitacaoDetails";

import icon from "../assets/svgs/novaOrden.svg"

export const Route = createFileRoute("/ordensAndamento")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      {/* div suprema */}
      <div className="flex flex-col">
        {/* header */}
        <Header title="Ordens em Andamento"></Header>
        <main className=" bg-bg-gray min-h-screen flex flex-col h-auto">
          <Button_Back redirect="/" title="Voltar"></Button_Back>
          <div>
            <SolicitacaoDetails
            nome="Pedro Gomes"
            CPF="123.456.678-09"
            numero="(88) 123123123"
            categoria="Iluminacao"
            local="11 de novembro"
            pontoReferencia="seu zezinho"
            problema="tacaram um sapato no poste e queimo tudo"
            solicitacao="23/12/2025"
            conclusao="30/01/2026"
            src={icon}
            ></SolicitacaoDetails>
          </div>
        </main>
        <Footer hasLogo={false}></Footer>
      </div>
    </>
  );
}
