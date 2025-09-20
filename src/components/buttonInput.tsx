interface Props {
  title: string;
  alt?: string;
  src?: string;
}

export const Button_Input = ({title, alt, src}: Props) => {
  return (
    <>
      <div className="rounded-2xl bg-light-gray flex items-center space-x-3">
        <input
          type="text"
          placeholder={title}
          className="px-10 py-4 text-header-blue font-inter font-bold cursor-pointer outline-0"
        />
        {src && <img src={src} alt={alt} className="mr-4" />}
      </div>
    </>
  );
};
