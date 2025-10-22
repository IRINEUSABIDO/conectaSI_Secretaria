import successIcon from "../assets/icons/sucesso.png";


export const EncaminhadaPopUpSuccess = () => {
  return (
    <>
      <div className="absolute bg-gray-main h-[100%] w-[100%] flex justify-center items-center bg-[#d2d2d280]">
        <div className="bg-green-blue  w-[70%] min-h-[20vh] h-auto mt-4 flex justify-center items-center rounded-3xl flex-col">
          <img src={successIcon} className="w-[25%] my-[4%]"></img>
          <p className="text-white font-inter font-bold text-2xl text-center">Ordem de Serviço <br></br> Cancelada</p>
        </div>
      </div>
    </>
  );
};