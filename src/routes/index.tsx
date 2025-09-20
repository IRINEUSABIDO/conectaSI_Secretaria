import { createFileRoute } from "@tanstack/react-router";

import { Button } from "../components/button";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Title } from "../components/title";

import logoPrefeitura from "../assets/logo.avif";
import sla from "../assets/icons/User_Card_ID.png";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      {/* div suprema */}
      <div
        className="flex flex-col border-8
      "
      >
        {/* header */}
        <header>
          <div className="bg-light-gray">
            <img src={logoPrefeitura} alt="logo da prefeitura HEADER" />
            <Header />
          </div>
        </header>
        {/* o resto */}
        <div className="flex gap-6 flex-col col h-screenc items-center bg-bg-gray">
          <div className="mb-4">
            <Title></Title>
          </div>
          <div className="border-8 ">
            <Button title="teste" redirect="/" src={sla} alt="pedrinho" />
          </div>
          <div className="border-8 ">
            <Button title="teste" redirect="/" src={sla} alt="pedrinho" />
          </div>
          <div className="border-8">
            <Button title="teste" redirect="/" src={sla} alt="pedrinho" />
          </div>
          <div></div>
        </div>
        <Footer hasLogo={false}></Footer>
      </div>
    </>
  );
}
