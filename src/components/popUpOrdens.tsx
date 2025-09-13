interface Props {
  categoria: string;
  local: string;
  problema: string;
  data_solicitacao: string;
  data_conclusao: string;
}
export const PopUpOrdens = (props: Props) => {
  return (
    <>
      <div className="bg-dark-gray min-w-[20%] min-h-[25vh] h-auto flex justify-center items-center rounded-3xl">
        <h1><b>Categoria:</b> {props.categoria}</h1>
        <h1><b>Local:</b> {props.local}</h1>
        <h1><b>Problema:</b> {props.problema}</h1>
        <h1><b>Data de Solicitação:</b> {props.data_solicitacao}</h1>
        <h1><b>Data de Conclusão:</b> {props.data_conclusao}</h1>
      </div>
    </>
  );
};
