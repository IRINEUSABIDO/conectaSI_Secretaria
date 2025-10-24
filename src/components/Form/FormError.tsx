interface Props {
  message: string | undefined;
}

export const FormError = ({ message }: Props) => {
  return (
    <p className="text-red-main font-inter font-semibold outline-0 m-0.5">
      {message}
    </p>
  );
};
