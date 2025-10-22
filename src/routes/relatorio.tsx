import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "../components/header";
import { Button_Back } from "../components/buttonBack";
import { DATEFormatter } from "../utils/DATEFormatter";
import { DATEValidation } from "../utils/DATEValidation";
import { Dropdown_Select } from "../components/dropdown";

export const Route = createFileRoute("/relatorio")({
  component: RouteComponent,
});

function RouteComponent() {
  const [data, setData] = useState("");
  const [data_2, setData_2] = useState("");
  const [validacao, setValidacao] = useState<boolean | null>(null);
  const [validacao_2, setValidacao_2] = useState<boolean | null>(null);

   const correcao = (e: React.ChangeEvent<HTMLInputElement>) => {
  const valorCorrigido = DATEFormatter(e.target.value);
  setData(valorCorrigido);

  if (valorCorrigido.length === 10) {
    setValidacao(DATEValidation(valorCorrigido));
  } else {
    setValidacao(null);
  }
};

const correcao_2 = (e: React.ChangeEvent<HTMLInputElement>) => {
  const valorCorrigido_2 = DATEFormatter(e.target.value);
  setData_2(valorCorrigido_2);

  if (valorCorrigido_2.length === 10) {
    setValidacao_2(DATEValidation(valorCorrigido_2));
  } else {
    setValidacao_2(null);
  }
};


  return (
    <>
      <div className="flex flex-col">
        <header className="bg-light-gray">
          <h1 className="text-center font-bold text-header-blue text-2xl ">
            Relatório
          </h1>
          <Header />
        </header>

        <main>
          <Button_Back redirect="/" title="Voltar" />
          <div className="flex gap-6 flex-col  h-screen items-center bg-bg-gray">
            {/* INPUTS PARA AS DATAS*/}
            <form className="flex flex-col gap-1">
              <div className="flex flex-col ">
                <input
                  id="data-inicial"
                  type="text"
                  value={data}
                  onChange={correcao}
                  placeholder="Do dia: --/--/----"
                  maxLength={10}
                  className={`bg-light-gray p-4 rounded-2xl px-22 ${
                    validacao === false ? "border-red-600" : "border-gray-500"
                  }`}
                />
                {validacao === false && (
                  <p className="text-red-500 text-center text-xs font-bold mt-1">
                    A data inserida é inválida. Tente novamente.
                  </p>
                )}
              </div>
            </form>

            <form className="flex flex-col gap-1">
              <div className="flex flex-col ">
                <input
                  id="data-final"
                  type="text"
                  value={data_2}
                  onChange={correcao_2}
                  placeholder="Até o dia: --/--/----"
                  maxLength={10}
                  className={`bg-light-gray p-4 rounded-2xl px-22 ${
                    validacao_2 === false ? "border-red-600" : "border-gray-500"
                  }`}
                />
                {validacao_2 === false && (
                  <p className="text-red-500 text-center text-xs font-bold mt-1">
                    A data inserida é inválida. Tente novamente.
                  </p>
                )}
              </div>
            </form>
            {/*DROPDOWN BOLADO*/}
            <Dropdown_Select
                title="Tipo de Ordem"
                opcao1="Novas Ordens de Serviço"
                opcao2="Ordens em Andamento"
                opcao3="Ordens de Serviço Concluídas"
                opcao4="Todas as Ordens de Serviço"
              />
          </div>
        </main>
      </div>
    </>
  );
}
