import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/header";
import sair from "./../assets/icons/sair.png";
import logoPrefeitura from "../assets/logoPrefeitura.png";
import footerImage from "../assets/footer.png";
import novaOrdem from "../assets/icons/novaOrdem.png"
import orEmexe from '../assets/icons/ordensEmExecuçao.png'
import ordemFin from '../assets/icons/ordensFinalizadas.png'

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className="flex flex-row h-screen">
        <div className=" bg-light-gray">
          <img
            className="border-r-4 border-solid border-header-blue py-7 px-2"
            src={logoPrefeitura}
            alt="Logo"
          />

          <div className="border-r-4 border-t-4 border-font-gray-2 h-screen">
            <div className="border-b-2 border-font-gray-2 py-2">
              <a href="" className="ml-2 font-inter font-medium ">
                Ordens de serviço
              </a>
            </div>

            <div className="border-b-2 border-font-gray-2 py-2">
              <a href="" className="ml-2 font-inter font-medium ">
                Colaboradores
              </a>
            </div>

            <div className="border-b-2 border-font-gray-2 py-2">
              <a href="" className="ml-2 font-inter font-medium ">
                Relatório
              </a>
            </div>

            <div className="flex justify-between border-b-2 border-font-gray-2 py-2">
              <a href="" className="ml-2 font-inter font-medium">
                Sair
              </a>
              <img src={sair} alt="sair_icon" />
            </div>
          </div>
        </div>
        <div className="flex-grow pb-0 mb-0">
          <Header title="SEINFRA"></Header>
          <div className="h-screen bg-bg-gray pl-15 pt-12">
              <div className="flex flex-row">  
                <div className="flex flex-col justify-center bg-light-gray w-80 h-50 mr-5 rounded-lg pb-5">
                    <img 
                      className="ml-28 mb-2"
                      src={novaOrdem}
                      alt="nOrdem"
                      width={100}
                      height={250}
                    />
                    <a href="https://www.youtube.com/watch?v=yL-i_sjdZdw&list=LL&index=7" className="mt-3 ml-7 -mb-10 pl-7 pt-1 w-65 h-8 bg-green-blue text-white font-inter rounded-lg">
                      Novas Ordens de Serviços
                    </a>
                </div>
                <div className="flex flex-col justify-center bg-light-gray w-80 h-50 mr-5 rounded-lg pb-5">
                    <img 
                      className="ml-28 mb-2"
                      src={orEmexe}
                      alt="ordemEmexecução"
                      width={100}
                      height={250}
                    />
                    <a href="https://www.youtube.com/watch?v=YivNfW4QFv8" className="mt-3 ml-7 -mb-10 pl-12 pt-1 w-65 h-8 bg-green-blue text-white font-inter rounded-lg">
                      Ordens em execução
                    </a>
                </div>
                <div className="flex flex-col justify-center bg-light-gray w-80 h-50 mr-5 rounded-lg pb-5">
                    <img 
                      className="ml-28 mb-2"
                      src={ordemFin}
                      alt="ordemFinalizada"
                      width={100}
                      height={250}
                    />
                    <a href="https://www.youtube.com/watch?v=RtUjL1EYg3I" className="mt-3 ml-7 -mb-10 pl-15 pt-1 w-65 h-8 bg-green-blue text-white font-inter rounded-lg">
                      Ordens Finalizadas
                    </a>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center h-max-10">
        <img src={footerImage} alt="footer do site" className="w-300" />
      </div>
    </>
  );
}
