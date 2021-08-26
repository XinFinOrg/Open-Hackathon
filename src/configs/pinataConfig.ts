
export const getPinataAPIKey = (): string => {
  return process.env.REACT_APP_PINATA_API_KEY ? process.env.REACT_APP_PINATA_API_KEY : "";
};
export const getPinataAPISecret = (): string => {
  return process.env.REACT_APP_PINATA_API_SECRET ? process.env.REACT_APP_PINATA_API_SECRET : "";
};