import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "../components/footer";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      {/* div do flex do header e da main  */}
      <div className=" flex flex-col w-screen h-screen">
        {/* header */}
        <header className="bg-light-gray ">
          <div className="flex flex-col items-center">
            <div className="p-2 flex">
              <h2 className="text-4xl font-inter font-light text-font-gray-2 pt-4">
                <em>CONECTA</em>
              </h2>
            </div>
            <div className="ml-[130px]">
              <h2 className="text-4xl font-inter font-light text-header-blue">
                <em>SEINFRA</em>
              </h2>
            </div>
          </div>
          <div className="flex">
            <div className="bg-header-red h-[15px] grow"></div>
            <div className="bg-header-light-blue h-[15px] grow"></div>
            <div className="bg-header-yellow h-[15px] grow"></div>
          </div>
        </header>
        {/* main */}
        <main className="w-screen flex-grow flex flex-col justify-evenly border-8 border-yellow-800">
          <div className="border-8 border-green-500 grow flex justify-evenly items-center">
            <div className="border-4">Nova Ordem de Serviço</div>
            <div className="border-4">Ordem em execução</div>
            <div className="border-4">Ordens Finalizadas</div>
          </div>
          <div className="border-8 border-red-600 grow flex justify-evenly items-center">
            <div className="border-4 ">Ordens de Serviço</div>
            <div className="border-4">Relatorio</div>
            <div className="border-4">Sair</div>
          </div>
        </main>
      </div>
      <Footer hasLogo={false}></Footer>
    </>
  );
}
