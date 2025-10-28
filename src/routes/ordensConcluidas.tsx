import { createFileRoute } from "@tanstack/react-router";

import { Header } from "../components/header";
import { Solicitacao } from "../components/solicitacao";
import { Footer } from "../components/footer";
import { Button_Back } from "../components/buttonBack";

export const Route = createFileRoute("/ordensConcluidas")({
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
    categoria: "Iluminaçao",
    local: "11 de novembro",
    problema: "rua ta toda cheia de buraco kakakakakakakakakakakakakakkadjaskldjaslknalcnaoicnadlkasndlkasdaslkdjaslkdjaslkdj",
    solicitacao: "21/08/2025",
    conclusao: "04/09/2025",
  },
  {
    categoria: "rua",
    local:
      "11 de novembro lalalalalalalalalallalalalalalalahlasdkjasdlkasdlkasjdlkasjdlkasjdklasjdklasjdklasjdklasjdlkasjdlkasjdlkasjkdljasldkasjdlkjkl",
    problema: "rua ta toda cheia de buraco",
    solicitacao: "21/08/2025",
    conclusao: "04/09/2025",
  },
];

function RouteComponent() {
  return (
    <>
      {/* div suprema */}
      <div className="flex flex-col">
        {/* header */}
        <Header title="Ordens Concluidas"></Header>
        <main className=" bg-bg-gray min-h-screen flex flex-col h-auto">
          <Button_Back redirect="/" title="Voltar"></Button_Back>
          <div>
            {
              <div>
                {teste.map((dado) => (
                  <Solicitacao
                    categoria={dado.categoria}
                    local={dado.local}
                    problema={dado.problema}
                    solicitacao={dado.solicitacao}
                    conclusao={dado.conclusao}
                    buttonColor="bg-green-500"
                  />
                ))}
              </div>
            }
          </div>
        </main>
        <Footer hasLogo={false}></Footer>
      </div>
    </>
  );
}
