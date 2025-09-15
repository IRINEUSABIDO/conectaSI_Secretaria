interface Props {
  categoria: string;
  local: string;
  problema: string;
  data_solicitacao: string;
  data_conclusao: string;
  css: string;
  estado: string;
}
export const PopUpOrdens = (props: Props) => {
  return (
    <>
      <div className="bg-ordemPopUp-bg min-w-[20%] min-h-[25vh] h-auto mb-4 text-justify p-4 rounded-3xl">
        <h1 className="break-keep"><b>Categoria:</b> {props.categoria}</h1>
        <h1 className="break-keep"><b>Local:</b> {props.local}</h1>
        <h1 className="break-keep"><b>Problema:</b> {props.problema}</h1>
        <h1 className="break-keep">Data de Solicitação:{props.data_solicitacao}</h1>
        <h1 className="break-keep">Data de Conclusão: {props.data_conclusao}</h1>
        <div className={props.css}>
          {props.estado}
        </div>
      </div>
    </>
  );
};
