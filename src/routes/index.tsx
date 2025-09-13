import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "../components/footer";
import { SimplePopUp } from "../components/simplePopUp";
import { PopUpOrdens } from "../components/popUpOrdens";
import novasOrdens from "../assets/icons/novasordens.png";
import ordensExecucao from "../assets/icons/ordensEmExecuçao.png";
import ordemFinalizada from "../assets/icons/ordensFinalizadas.png";
import logoPrefeitura from "../assets/logo.avif";
export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      {/* div suprema */}
      <div className="flex border-8 min-h-screen h-auto border-b-blue-600">
        {/* div principal da sidebar*/}
        <div className="flex-1/12 flex flex-col bg-light-gray">
          {/*logo*/}
          <div className="flex-auto flex justify-center items-center border-r-5 border-solid border-header-blue">
            <img
              src={logoPrefeitura}
              alt="logo prefeitura"
              className="py-7 px-2"
            />
          </div>
          {/*o resto (provavelmente vai ser link depois) */}
          <div className="flex-4/5  border-r-5 border-t-4 border-solid border-font-gray-2">
            <p className="pl-2 font-inter font-medium border-b-2 border-font-gray-2 py-2">
              Ordens de serviço
            </p>
            <p className="pl-2 font-inter font-medium border-b-2 border-font-gray-2 py-2">
              Relatório
            </p>
          </div>
        </div>
        {/* div do flex do header e da main  */}
        <div className=" flex flex-col h-auto flex-4/5 bg-bg-gray">
          {/* header */}
          <header className="bg-light-gray ">
            <div className="flex flex-col items-center">
              <div className="p-2 flex">
                <h2 className="text-4xl font-inter font-light text-font-gray-2 pt-4">
                  <em>CONECTA</em>
                </h2>
              </div>
              <div className="ml-[130px]">
                <h2 className="text-4xl font-inter font-light h1text-header-blue">
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
          <main className="flex-grow flex flex-col max-h-full border-8 border-yellow-800">
            {/* Popups*/}
            <div className="flex justify-center gap-4 min-w-0 h-auto border-8">
              <SimplePopUp
                title="Novas Ordens de Serviços"
                src={novasOrdens}
              ></SimplePopUp>
              <SimplePopUp
                title="Ordens em execução"
                src={ordensExecucao}
              ></SimplePopUp>
              <SimplePopUp
                title="Novas Ordens de Serviços"
                src={novasOrdens}
              ></SimplePopUp>
            </div>
            <div className="flex justify-center items-center border-8 border-fuchsia-950 grow relative">
              <div className="bg-light-gray pb-90"></div>

              {/* popups debaixo com as ultimas ordens */}
              <div className="absolute top-0 left-0">
                <div className=" bg-header-blue flex justify-start items-start p-3 pr-48 m-4 rounded-2xl text-2xl font-bold text-white">
                  Últimas Ordens
                </div>
                 <PopUpOrdens
                categoria="MACACO FILHA DA PUTA"
                local="o quarto do filha da puta que criou essa merda"
                problema="fogo no cu do desgraçado"
                data_solicitacao="asdadsasdasdasdadsasd"
                data_conclusao="FGNSDFB tgyfv   "
              />
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer hasLogo={false}></Footer>
    </>
  );
}
