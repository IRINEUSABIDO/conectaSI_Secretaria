import { useFormContext } from "react-hook-form";

interface Props {
  title: string;
  alt?: string;
  src?: string;
  name: string;
}

export const FormButton = ({title, alt, src, name}: Props) => {
  const { register } = useFormContext();
  return (
    <>
      <div className="rounded-2xl bg-light-gray flex items-center space-x-3">
        <input
          {...register(name)}
          type="text"
          placeholder={title}
          className="px-10 py-4 text-header-blue font-inter font-bold cursor-pointer outline-0"
        />
        {src && <img src={src} alt={alt} className="mr-4" />}
      </div>
    </>
  );
};
