import option_off from "../../assets/icons/opcaoNaoMarcada.png";
import option_on from "../../assets/icons/opcaoMarcada.png";

interface Props {
  selected: boolean;
}

export const FormDropdownSelectButton = ({ selected }: Props) => {
  return (
    <div>
      <input type="checkbox" checked={selected} readOnly className="hidden" />
      <img
        src={selected ? option_on : option_off}
        alt={selected ? "Selecionado" : "Não selecionado"}
        className="w-[45px] m-[2px] cursor-pointer"
      />
    </div>
  );
};
