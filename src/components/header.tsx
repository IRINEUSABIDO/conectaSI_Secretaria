interface Props {
  title?: string;
}

export function Header({ title }: Props) {
  return (
    <header className="bg-light-gray ">
      <h1 className="text-center font-bold text-2xl text-header-blue mt-[20px]">
        {title}
      </h1>

      <div className="flex">
        <div className="bg-header-red h-[15px] grow"></div>
        <div className="bg-header-light-blue h-[15px] grow"></div>
        <div className="bg-header-yellow h-[15px] grow"></div>
      </div>
    </header>
  );
}
