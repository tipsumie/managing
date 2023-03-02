import { useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';

const apiUrl = import.meta.env.VITE_BASE_URL;

function ProtectedRoute(props) {
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const response = await axios.get(`${apiUrl}/current-user`, {
        headers: {
          'authtoken': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
      navigate('/login');
    }
  };
  

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      getUser();
    } else {
      navigate('/login');
    }
  }, []);

  const isAuthenticated = localStorage.getItem('token') && localStorage.getItem('user');

  if (isAuthenticated) {
    return props.children;
  } else {
    return <Navigate to='/login' />;
  }
}

export default ProtectedRoute;
   