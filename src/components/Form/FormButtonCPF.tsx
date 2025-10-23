import { useFormContext, useController } from "react-hook-form";
import { corretorCPF } from "../../utils/CPFFormatter";

interface Props {
  title: string;
  src: string;
}
export const FormButtonCPF = ({ title, src }: Props) => {
  const { control } = useFormContext();

  const {
    field: { onChange, value, ...rest },
  } = useController({ control, name: "cpf", defaultValue: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(corretorCPF(e.target.value));
  };

  return (
    <>
      <div className="rounded-2xl bg-light-gray flex items-center space-x-3">
        <input
          {...rest}
          type="text"
          placeholder={title}
          value={value}
          onChange={handleChange}
          maxLength={14}
          className="px-10 py-4 text-header-blue font-inter font-bold cursor-pointer outline-0 "
        />
        <img src={src} alt="identify" className="mr-4" />
      </div>
    </>
  );
};
