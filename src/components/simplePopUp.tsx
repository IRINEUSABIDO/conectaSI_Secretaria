interface Props {
  title: string;
  alt?: string;
  src?: string;
}
export const SimplePopUp = (props: Props) => {
  return (
    <>
      <div className="bg-light-gray  min-w-[25%] min-h-[30vh] h-auto flex justify-center items-center rounded-3xl">
        <div className="flex flex-col items-center gap-4">
          <img src={props.src} alt={props.alt} className="" />
          <button type="button" className="bg-header-blue min-w-[80%] w-[100%] cursor-pointer rounded-xl ">
            <div className="m-2 mx-10">
            <h1 className="font-bold text-white">{props.title}</h1>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};
