import { createFileRoute } from "@tanstack/react-router";
import { Button_cpf } from "../components/buttonCPF";
import { Button_password } from "../components/buttonPassword";
import ConectaSeinfraIcon from "../assets/IconsNewSvgs/ConectaSeinfra.svg";
import LogoPrefeitura from "../assets/IconsNewSvgs/LogoPrefeitura.svg";
import pinkLine from "../assets/IconsNewSvgs/pinkLine.svg";
import yellowLine from "../assets/IconsNewSvgs/yellowLine.svg";

export const Route = createFileRoute("/newLogin")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <>
            <img src={pinkLine} alt="" />
            {/* HEADER */}
            <div className="flex flex-col overflow-x-hidden space-y-18">
                <header>
                    <div className="flex items-center justify-center">
                        <h1 className="font-semibold mt-[5%] text-5xl text-header-blue">
                            Login
                        </h1>
                    </div>
                    <div className="flex items-center justify-center">
                        <h1 className="font-light text-xl mt-[4%] text-center text-header-blue">
                            Informe seu CPF e senha para entrar <br /> na sua conta
                        </h1>
                    </div>
                </header>
                {/* MAIN */}
                <main className="mt-[2%]">
                    <div className="flex flex-col justify-center items-center">
                        {/* BOTÕES COMPONENTES */}
                        <Button_cpf title="CPF" />
                        <Button_password title="Senha" hasPassword={true} />

                        <button className="bg-[#1a777d] w-[90vw] sm:w-[600px]  py-4 rounded-3xl text-white font-bold cursor-pointer">
                            <h1>Entrar</h1>
                        </button>
                    </div>
                </main>
                {/* FOOTER */}
                <footer className="flex items-center text-center justify-center mt-[5%] mb-[5%] flex-col">
                    <h1 className="text-header-light-blue">
                        Não tem uma conta? <br />{" "}
                        <a href="/criarConta" className="text-yellow-300 underline">
                            Criar Conta
                        </a>
                    </h1>
                    <div className="flex items-center justify-center mt-[5%] mb-[5%] space-x-32">
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
