import { createFileRoute } from "@tanstack/react-router";
import { Button_cpf } from "../components/buttonCPF";
import { Button_password } from "../components/buttonPassword";
export const Route = createFileRoute("/newLogin")({
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
              Login
            </h1>
          </div>
          <div className="flex items-center justify-center">
            <h1 className="font-light text-xl mt-[1%] text-center text-header-blue">
              Informe seu CPF e senha para entrar <br /> na sua conta
            </h1>
          </div>
        </header>
        {/* MAIN */}
        <main className="mt-[2%]">
          <div className="flex flex-col justify-center items-center">
            <Button_cpf title="CPF" />
            <Button_password title="Senha" hasPassword={true}/>
          </div>
        </main>
      </div>
    </>
  );
}
