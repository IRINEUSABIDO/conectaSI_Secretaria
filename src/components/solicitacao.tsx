import icon_camera from "../assets/logoPrefeitura.png";

interface Props {
  alt?: string;
  src?: string;
  categoria: string;
  local: string;
  problema: string;
  solicitacao: string;
  conclusao: string;
  buttonColor: string;
}

export const Solicitacao = (props: Props) => {
  return (
    <>
      <div className="flex justify-center items-center pb-2 pt-4 min-w-screen">
        <div className="bg-light-gray rounded-2xl p-4 w-[90vw] mb-8">
          {/*CATEGORIA E LOCAL AO LADO DA IMAGEM*/}
          <div className="flex">
            {" "}
            <img
              src={icon_camera}
              className="bg-header-blue aspect-square w-20 m-3 mt-4 md:w-30 rounded-[8px]"
            />
            <div className="flex pt-4 flex-col ">
              <div className="flex gap-2">
                <h2 className="font-bold text-header-blue md:text-xl">
                  Categoria:{" "}
                </h2>
                <h2 className="font-bold text-header-blue md:text-xl">
                  {props.categoria}
                </h2>
              </div>
              <div className="flex gap-1">
                <h1 className="font-bold text-header-blue md:text-xl">
                  Local:
                </h1>
                <p className="font-bold text-header-blue max-w-[10rem] md:text-xl md:max-w-[30rem] truncate">
                  {props.local}
                </p>
              </div>
            </div>
          </div>
          {/* PROBLEMA EMBAIXO DA IMAGEM */}
          <div className="ml-4">
            <div className="mb-2">
              <h1 className="font-bold text-[#6a6e74] md:text-xl inline">
                Problema:{" "}
              </h1>
              <h1 className="font-bold text-[#6a6e73] md:text-xl break-all inline">
                {props.problema}
              </h1>
            </div>
            <div className="flex justify-between gap-1 items-end">
              {" "}
              <div>
                {" "}
                <h1 className="font-bold text-[#6a6e73] text-sm md:text-[1.05rem] mt-3">
                  Data da Solicitação: {props.solicitacao}
                </h1>
                <h1 className="font-bold text-[#6a6e73] text-sm md:text-[1.05rem]">
                  Data da Conclusão: {props.conclusao}
                </h1>
              </div>
              <button className={`p-2 px-2 sm:px-10 ${props.buttonColor} font-bold cursor-pointer text-white rounded-[4px] h-[50%]`}>
                Acessar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
