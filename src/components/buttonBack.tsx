import { Link } from "@tanstack/react-router";
import setaEsquerda from "../assets/svgs/setaEsquerda.svg";

interface Props {
  redirect: string;
  title: string;
}
export const Button_Back = ({ redirect, title }: Props) => {
  return (
    <>
      <div className="flex justify-center items-center bg-bg-gray">
        <div className="w-screen">
          <div className="text-white">
            <button
              type="button"
              className="flex items-center cursor-pointer p-4"
            >
              <img src={setaEsquerda} alt="seta para a esquerda" />
              <div className="font-bold text-header-blue text-xl">
                <h1>
                  <Link to={redirect}>{title}</Link>
                </h1>
              </div>
              
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
