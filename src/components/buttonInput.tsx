interface Props {
  title: string;
  type: string;
  alt?: string;
  src?: string;
}

export const Button_Input = ({title, alt, src, type}: Props) => {
  return (
    <>
      <div className="rounded-2xl bg-light-gray flex items-center space-x-3">
        <input
          type={type}
          placeholder={title}
          className="px-10 py-4 text-header-blue font-inter font-bold cursor-pointer outline-0 mx-5"
        />
        {src && <img src={src} alt={alt} className="mr-4" />}
      </div>
    </>
  );
};
