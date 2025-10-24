import { useFormContext } from "react-hook-form";
import { useState } from "react";
import chevron_up from "../../assets/icons/Chevron_Up.png";
import chevron_down from "../../assets/icons/Chevron_Down.png";
import { FormDropdownSelectButton } from "./formDropdownButton";

interface Props {
  title: string;
  name: string;
  opcao1: string;
  opcao2: string;
  opcao3: string;
  opcao4: string;
  opcao5: string;
}

export const FormDropdownSelect = ({
  title,
  name,
  opcao1,
  opcao2,
  opcao3,
  opcao4,
  opcao5,
}: Props) => {
  const { setValue, watch } = useFormContext();
  const [isOpen, setIsOpen] = useState(false);

  const valorSelecionado = watch(name);

  const opcoes = [opcao1, opcao2, opcao3, opcao4, opcao5];

  const handleSelect = (valor: string) => {
    setValue(name, valor, { shouldValidate: true });
    setIsOpen(false);
  };

  return (
    <div className="relative z-10 rounded-2xl bg-light-gray flex flex-col items-center justify-center p-4 pr-2 w-[365px]">
      <div className="w-full flex justify-between items-center font-inter font-bold text-header-blue">
        <h1 className="text-header-blue">{title}</h1>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="outline-none cursor-pointer"
        >
          <img
            src={isOpen ? chevron_down : chevron_up}
            alt="Ícone do menu"
            className="w-[25px] m-[2px] cursor-pointer"
          />
        </button>
      </div>

      {/* Campo hidden para registrar no React Hook Form */}
      <input type="hidden" name={name} value={valorSelecionado || ""} />

      {/* Lista de opções visível quando dropdown estiver aberto */}
      {isOpen && (
        <div className="absolute top-full z-50 mt-2 w-full flex flex-col items-center space-y-2">
          {opcoes.map((opcao, index) => (
            <div
              key={index}
              className="w-full flex items-center justify-between bg-white py-3 px-4 rounded-xl shadow-xl shadow-gray-400 cursor-pointer text-header-blue font-bold"
              onClick={() => handleSelect(opcao)}
            >
              <span>{opcao}</span>
              <FormDropdownSelectButton selected={valorSelecionado === opcao} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
