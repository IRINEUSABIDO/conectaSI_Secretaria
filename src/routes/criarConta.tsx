import { createFileRoute } from "@tanstack/react-router";
import { Button_Input } from "../components/buttonInput";
import { Button_cpf } from "../components/buttonCPF";
import ConectaSeinfraIcon from "../assets/IconsNewSvgs/ConectaSeinfra.svg";
import LogoPrefeitura from "../assets/logoPrefeitura.png";
export const Route = createFileRoute("/criarConta")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      {/* HEADER */}
      <div className="flex flex-col overflow-x-hidden">
        <header>
          <div className="flex items-center justify-center">
            <h1 className="font-semibold mt-[5%] text-4xl text-header-blue">
              Criar Conta
            </h1>
          </div>
          <div className="flex items-center justify-center">
            <h1 className="font-light text-xl mt-[1%] text-header-blue">
              Preencha as informações obrigatórias para criar sua conta
            </h1>
          </div>
        </header>

        {/* MAIN */}
        <main className="mt-[2%]">
          <div className="flex flex-col justify-center items-center ">

            {/* BOTÕES: COMPONENTES */}
            <Button_Input type="text" title="Nome" />
            <Button_Input type="tel" title="Telefone" />
            <Button_cpf title="CPF"/>

            <button className="bg-header-blue px-42 py-4 rounded-3xl text-white font-bold cursor-pointer">
                <h1>Continuar</h1>
            </button>
          </div>
        </main>

        {/* FOOTER */}
        <footer className="flex items-center justify-center mt-[5%] mb-[5%] space-x-8">
        <img src={ConectaSeinfraIcon} alt="Logo do Conecta Seinfra"/>
        <img src={LogoPrefeitura} alt="LogoPrefeitura de Nova Russas" />
        </footer>
      </div>
    </>
  );
}
