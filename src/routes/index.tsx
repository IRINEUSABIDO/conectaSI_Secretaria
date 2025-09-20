import { createFileRoute} from "@tanstack/react-router"; // adicionar o import no redirect depois
// import Cookie from "../utils/Cookies";    mesma coisa com esse cookie

export const Route = createFileRoute("/")({
  //  codigo por pra redirecionar se n tiver login,
  //  comentado por enquanto pq so 1 pessoa tem o codigo do backend
  //  beforeLoad: () => {
  //   const login = Cookie.getCookie("login");
  //   if (!login) {
  //     throw redirect({ to: "/login" });
  //   }
  // },
  component: RouteComponent,
});
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Title } from "../components/title";
import Logo from "../assets/logoPrefeitura.png";
import adicionar_icon from "../assets/icons/+.png";
import teclado_icon from "../assets/icons/teclado.png";

function RouteComponent() {
  return (
    <>
      <header>
        <div className="bg-light-gray">
          <img
            src={Logo}
            alt="logo da prefeitura HEADER"
            className="w-[190px]"
          />
          <Header title=" " />
        </div>
      </header>

      <main>
        <div className="flex items-center justify-center bg-dark-gray text-light-gray h-screen">
          <div className="columns-1">
            <Title />

            <div className="rounded-2xl bg-light-gray flex items-center space-x-16 ">
              <button
                type="button"
                className="px-9 py-4 text-header-blue font-inter font-semibold"
              >
                <h1>
                  Novas Ordens de Serviço
                </h1>
              </button>
              <img
                src={adicionar_icon}
                alt="Opção Index +"
                className="w-[10px]"
              />
            </div>

            <br />

            <div className="rounded-2xl bg-light-gray flex items-center space-x-16">
              {" "}
              <button
                type="button"
                className="px-9 py-4 text-header-blue font-inter font-semibold"
              >
                <h1>
                  OS em Andamento
                </h1>
              </button>
              <img
                src={adicionar_icon}
                alt="Opção Index +"
                className="w-[10px]"
              />
            </div>

            <br />

            <div className="rounded-2xl bg-light-gray flex items-center space-x-18 ">
              {" "}
              <button
                type="button"
                className="px-9 py-4 text-header-blue font-inter font-semibold"
              >
                <h1>OS Concluídas</h1>
              </button>
              <img
                src={teclado_icon}
                alt="Opção Index teclado"
                className="w-[25px]"
              />
            </div>

                <br/>
            <div className="rounded-2xl bg-light-gray flex items-center space-x-16">
              {" "}
              <button
                type="button"
                className="px-9 py-4 text-header-blue font-inter font-semibold"
              >
                <h1>
                  Histórico das OS
                </h1>
              </button>
              <img
                src={adicionar_icon}
                alt="Opção Index +"
                className="w-[10px]"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer hasLogo={false} />
    </>
  );
}
