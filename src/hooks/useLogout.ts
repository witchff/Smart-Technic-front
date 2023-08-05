import { useNavigate } from 'react-router-dom';

const useLogout = () => {
  const navigate = useNavigate();

  const logout = () => {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
      navigate(0);
    }
  };

  return { logout };
};

export default useLogout;
