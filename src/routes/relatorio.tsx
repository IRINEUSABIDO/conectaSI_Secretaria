import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/header";
import { Button_Back } from "../components/buttonBack";
export const Route = createFileRoute("/relatorio")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
    {/* Div suprema */}
      <div className="flex flex-col border-8">
        {/* Header */}
        <header className="bg-light-gray items-center">
          <h1 className="text-center font-bold text-header-blue text-2xl mt-3 ">
            Relatório
          </h1>
          <Header />
        </header>
        <main>
          {/* Botão para redirecionar para o menu principal*/}
          <Button_Back redirect="/index/" title="Voltar"/>

          <div className="rounded-2xl bg-light-gray flex items-center space-x-3">
              <input type="date" placeholder="Do dia: --/--/----" />
          </div>
        </main>
      </div>
    </>
  );
}
