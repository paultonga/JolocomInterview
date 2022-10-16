export const generateRandomBool = (): Promise<boolean> => {
  return Promise.resolve(Math.floor(Math.random() * 10) % 2 === 0);
};
