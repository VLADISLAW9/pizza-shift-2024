export const convertImagePath = (path: string) => {
  return `/${path.split('/').slice(2).join('/')}`;
};
