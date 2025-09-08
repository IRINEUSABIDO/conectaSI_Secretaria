import icon_camera from "../assets/icons/cameraRO.png";

interface Props {
  alt?: string;
  src?: string;
  categoria: string;
  local: string;
  problema: string;
  solicitacao: string;
  conclusao: string;
}

export const Tela_Solicitacao = (props: Props) => {
  return (
    <>
      <div className="flex justify-center items-center pb-2 pt-4 min-w-screen">
        <div className="bg-light-gray rounded-2xl p-4 min-w-[90vw] ml-4 mr-2">
          {/*CATEGORIA E LOCAL AO LADO DA IMAGEM*/}
          <div className="flex items-start">
            {" "}
            <img
              src={icon_camera}
              className="bg-header-blue w-[120px] p-8 m-3 rounded-2xl"
            />
            <div className="flex flex-col space-y-2 ml-6">
              <h1 className="font-bold text-header-blue text-xl">
                Categoria:{" "}
              </h1>
              <h2 className="font-light text-black text-xl break-all">
                {props.categoria}
              </h2>

              <h1 className="font-bold text-header-blue text-xl">Local:</h1>
              <h2 className="font-light text-black text-xl break-all">
                {props.local}
              </h2>
            </div>
          </div>
          {/* PROBLEMA EMBAIXO DA IMAGEM */}
          <div className="ml-8">
            <h1 className="font-bold text-header-blue text-xl">Problema: </h1>
            <h2 className="font-light text-black text-xl break-all">
              {props.problema}
            </h2>

            <h1 className="font-bold text-gray-600 text-sm mt-3 break-all">
              Data da Solicitação: {props.solicitacao}
            </h1>
            <h1 className="font-bold text-gray-600 text-sm break-all">
              Data da Conclusão: {props.conclusao}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};
