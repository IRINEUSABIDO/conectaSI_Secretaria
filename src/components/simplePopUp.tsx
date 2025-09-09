interface Props {
  title: string;
  alt?: string;
  src?: string;
}
export const SimplePopUp = (props: Props) => {
  return (
    <>
      <div className="bg-light-gray w-[300px] h-[200px] flex justify-center items-center rounded-3xl">
        <div className="flex flex-col items-center gap-4">
          <img src={props.src} alt={props.alt} className="w-[80px]" />
          <button type="button" className="bg-header-blue cursor-pointer rounded-xl ">
            <div className="m-2 mx-10">
            <h1 className="font-bold text-white">{props.title}</h1>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};
