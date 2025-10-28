interface Props {
    placeholder?: string;
    title: string;
    type: string;
}

export const Button_Input = ({ placeholder, title, type }: Props) => {
    return (
        <>
            <div className="flex flex-col mb-[5%]">
                <h1 className="font-xs font-bold text-header-blue ml-3">{title}</h1>

                <div className="rounded-3xl bg-white border-2 border-header-light-blue flex items-center space-x-3 w-[90vw] sm:w-[600px]">
                    <input
                        type={type}
                        placeholder={placeholder}
                        className="w-full max-w-[600px] px-4 py-4 text-header-blue font-inter font-bold cursor-pointer outline-0 "
                    />
                </div>
            </div>
        </>
    );
};
