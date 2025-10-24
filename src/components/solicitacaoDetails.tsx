interface Props {
  alt?: string;
  src?: string;
  nome: string;
  CPF: string;
  numero: string;
  categoria: string;
  local: string;
  pontoReferencia: string;
  problema: string;
  solicitacao: string;
  conclusao: string;
}

export const SolicitacaoDetails = (props: Props) => {
  return (
    <div>
      <div className="h-auto max-h-[80vh] bg-light-gray rounded-2xl p-4 mb-6 mx-4">
        <div className="flex flex-col h-full gap-2 md:justify-between">
          <div className="flex justify-center">
            <img
              src={props.src}
              alt={props.alt}
              className="bg-header-blue aspect-square w-20 m-3 mt-4 md:w-30 rounded-[8px]"
            />
          </div>
          <div>
            {" "}
            <h1 className="font-bold text-gray-700  md:text-xl">
              Nome:{" "}
              <span className="text-[#6a6e73] font-bold">{props.nome}</span>
            </h1>
            <h1 className="font-bold text-gray-700  md:text-xl">
              CPF: <span className="text-[#6a6e73] font-bold">{props.CPF}</span>
            </h1>
            <h1 className="font-bold text-gray-700  md:text-xl">
              Número:{" "}
              <span className="text-[#6a6e73] font-bold">{props.numero}</span>
            </h1>
          </div>
          <div>
            <h1 className="underline text-header-blue text-2xl md:text-3xl">
              Problema:
            </h1>
            <h1 className="font-bold text-header-blue  md:text-xl">
              Categoria:{" "}
              <span className="text-[#6a6e73] font-bold md:text-xl">
                {props.categoria}
              </span>
            </h1>
            <h1 className="font-bold text-header-blue  md:text-xl">
              Local:{" "}
              <span className="text-[#6a6e73] font-bold md:text-xl">
                {props.local}
              </span>
            </h1>
            <h1 className="font-bold text-header-blue  md:text-xl">
              <span className="text-[#6a6e73] font-bold md:text-xl">
                Ponto de Referencia: {props.pontoReferencia}
              </span>
            </h1>
          </div>
          <div>
            <h1 className="font-bold text-header-blue  md:text-xl">
              Descrição:{" "}
              <span className="text-[#6a6e73] font-bold md:text-xl">
                {props.problema}
              </span>
            </h1>
          </div>
          <div>
            <h1 className="font-bold text-header-blue  md:text-xl">
              Data de Solicitação:{" "}
              <span className="text-[#6a6e73] font-bold md:text-xl">
                {props.solicitacao}
              </span>
            </h1>
          </div>
          <div>
            <div className="flex justify-between">
              {" "}
              <div>
                <button className="bg-red-500 font-bold cursor-pointer text-white rounded-[4px] p-2 px-2 sm:px-10">
                  Cancelar{" "}
                  <img
                    className="inline w-6 h-6"
                    src={props.src}
                    alt={props.alt}
                  />
                </button>
              </div>
              <div>
                {" "}
                <button className="bg-green-500 font-bold cursor-pointer text-white rounded-[4px] p-2 px-2 sm:px-10">
                  Concluir{" "}
                  <img
                    className="inline w-6 h-6"
                    src={props.src}
                    alt={props.alt}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
