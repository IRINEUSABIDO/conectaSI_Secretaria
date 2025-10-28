import { createFileRoute } from "@tanstack/react-router";
import { Button_password } from "../components/buttonPassword";
import ConectaSeinfraIcon from "../assets/IconsNewSvgs/ConectaSeinfra.svg";
import LogoPrefeitura from "../assets/IconsNewSvgs/LogoPrefeitura.svg";
import pinkLine from "../assets/IconsNewSvgs/pinkLine.svg";
import yellowLine from "../assets/IconsNewSvgs/yellowLine.svg";

export const Route = createFileRoute("/criarContaSenha")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <img src={pinkLine} alt="Linha Rosa Background" />
      {/* HEADER */}
      <div className="flex flex-col overflow-x-hidden space-y-18">
        <header>
          <div className="flex items-center justify-center">
            <h1 className="font-semibold mt-[5%] text-5xl text-header-blue">
              Criar Conta
            </h1>
          </div>
          <div className="flex items-center justify-center">
            <h1 className="font-light text-xl mt-[4%] text-header-blue">
              Preencha as informações obrigatórias para criar sua conta
            </h1>
          </div>
        </header>
        {/* MAIN */}
        <main className="mt-[2%]">
          <div className="flex flex-col justify-center items-center">
            {/* BOTÕES COMPONENTES */}
            <Button_password title="Senha" hasPassword={true} />
            <Button_password title="Confirmar Senha" hasPassword={true} />

            <button className="bg-header-blue w-[80vw] sm:w-auto sm:px-46 py-4 rounded-3xl text-white font-bold cursor-pointer">
              <h1>Entrar</h1>
            </button>
          </div>
        </main>

        {/* FOOTER */}
        <footer className="flex items-cente justify-center flex-col">
          <div className="flex items-center justify-center mt-[15%] mb-[5%] space-x-32">
            <img src={ConectaSeinfraIcon} alt="Logo do Conecta Seinfra" />
            <img src={LogoPrefeitura} alt="LogoPrefeitura de Nova Russas" />
          </div>

          <img
            src={yellowLine}
            alt="Yellow Line"
            className="absolute right-0 "
          />
        </footer>
      </div>
    </>
  );
}
