import { useState } from "react";
import hide from "../assets/IconsNewSvgs/passwordHide.svg";
import show from "../assets/IconsNewSvgs/passwordShow.svg";
interface Props {
    title: string;
    placeholder?: string;
    hasPassword: boolean;
    src?: string;
}

export const Button_password = ({
    title,
    placeholder,
    hasPassword,
    src,
}: Props) => {
    const [showPassword, setShowPassword] = useState(false);
    const click = () => {
        setShowPassword((alternar) => !alternar);
    };
    //Props do input para senhas
    return (
        <>
            <div className="flex flex-col mb-[5%]">
                <h1 className="font-xs font-bold text-header-blue ml-3">{title}</h1>

                {hasPassword ? (
                    <div className="rounded-3xl bg-white border-2 border-header-light-blue flex items-center justify-between w-[90vw] sm:w-[600px]">
                        <input
                            placeholder={placeholder}
                            type={showPassword ? "text" : "password"}
                            className="pl-4 pr-10 flex-grow py-4 text-header-blue font-inter font-semibold outline-0"
                        />
                        <button type="button" onClick={click} className="outline-none">
                            {" "}
                            <img
                                //troca as imagens de acordo com o tipo string definido
                                src={showPassword ? show : hide}
                                alt="Altenar imagens quando quiser mostrar ou nao sua senha"
                                className="w-[25px] m-[2px] cursor-pointer mr-4"
                            />
                        </button>
                    </div>
                ) : (
                    <div className="rounded-2xl bg-light-gray flex items-center">
                        <input
                            placeholder={placeholder}
                            type="password"
                            className="px-10 py-4 text-header-blue font-inter font-semibold outline-0"
                        />
                        {src && (
                            <img src={src} alt="confirmação da senha" className="mr-4" />
                        )}
                    </div>
                )}
            </div>
        </>
    );
};
