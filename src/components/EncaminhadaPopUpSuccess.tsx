import successIcon from "../assets/icons/sucesso.png";

interface Props {
  open: boolean,
  onClose: () => void
}

export const EncaminhadaPopUpSuccess = (props: Props) => {
  return (
    <>
      <div className={` ${props.open ? "visible" : "invisible"} absolute bg-gray-main h-[100%] w-[100%] flex justify-center items-center bg-[#d2d2d280]`}>
        <div className="bg-green-blue  w-[70%] min-h-[30vh] h-auto mt-4 flex justify-center items-center rounded-3xl flex-col">
          <img src={successIcon} className="w-[25%] my-[4%]"></img>
          <p className="text-white font-inter font-bold text-2xl text-center pb-4">Ordem de Serviço <br></br> Concluida</p>
          <button onClick={props.onClose} className={` mb-4 cursor-pointer hover:bg-dark-gray
           bg-light-gray p-2 w-[20%] rounded-[8px]`}>Ok</button>
        </div>
      </div>
    </>
  );
};