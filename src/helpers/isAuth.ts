export const isAuth = () => {
  return Boolean(window.localStorage.getItem('token'));
};
