import { Link } from "@tanstack/react-router";

interface Props {
  title: string;
  redirect: string;
  alt: string;
  src: string;
}

export const Button = ({ title, alt, src, redirect }: Props) => {
  return (
    <>
      <div className="rounded-2xl bg-light-gray flex items-center space-x-16">
        {" "}
        <button
          type="button"
          className="px-9 py-4 text-header-blue font-inter font-semibold"
        >
          <h1>
            <Link to={redirect}>{title}</Link>
          </h1>
        </button>
        <img src={src} alt={alt} className="w-[10px]" />
      </div>
    </>
  );
};
