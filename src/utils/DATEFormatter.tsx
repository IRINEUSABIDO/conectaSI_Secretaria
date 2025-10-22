export const DATEFormatter = (data: string): string => {
  data = data.replace(/\D/g, "");
  return data
    .replace(/^(\d{2})(\d)/, "$1/$2")
    .replace(/^(\d{2})\/(\d{2})(\d)/, "$1/$2/$3")
    .slice(0, 10);
};
