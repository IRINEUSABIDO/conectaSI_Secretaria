import logoPrefeitura from "../assets/logoPrefeitura.png";
interface Props {
  hasLogo: boolean;
}

export const Footer = ({hasLogo}: Props) => {
  return (
    <>
      <footer>
        {hasLogo ? (
          <div>
            <div className="flex">
              <div className="bg-header-red h-[15px] grow"></div>
              <div className="bg-header-light-blue h-[15px] grow"></div>
              <div className="bg-header-yellow h-[15px] grow"></div>
            </div>
            <div className="flex items-center justify-center bg-light-gray ">
              <img src={logoPrefeitura} alt="logo da prefeitura" />
            </div>
            <div className="flex bg-[url('./assets/footer.png')] h-10 bg-repeat">
            </div>
          </div>
        ) : (
          <div className="flex bg-[url('./assets/footer.png')] h-10 bg-repeat">
          </div>
        )}
      </footer>
    </>
  );
};
