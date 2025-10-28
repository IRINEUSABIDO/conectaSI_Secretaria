//import do regex do cpf
import { corretorCPF } from "../utils/CPFFormatter";
import { useState } from "react";

interface Props {
  title: string;
  placeholder?: string;
  src?: string;
}
export const Button_cpf = ({ title, placeholder, src }: Props) => {
  const [cpf, setCpf] = useState<string>("");

  //responsavel por como vai ficar e vai tipar para autocomplementar com os devidos sinais do cpf
  const mudanca = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCpf(corretorCPF(e.target.value));
  };
  return (
    <>
      <div className="flex flex-col mb-[5%]">
        <h1 className="font-xs font-bold text-header-blue ml-3">{title}</h1>

        <div className="rounded-3xl bg-white border-2 border-header-light-blue flex items-center space-x-3">
          <input
            type="text"
            placeholder={placeholder}
            value={cpf}
            onChange={mudanca}
            maxLength={14}
            className="px-18 py-4 text-header-blue font-inter font-bold cursor-pointer outline-0 "
          />
          <img src={src} className="mr-4" />
        </div>
      </div>
    </>
  );
};
