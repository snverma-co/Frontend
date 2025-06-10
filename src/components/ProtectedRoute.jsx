import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import LoginPage from './LoginPage';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  return children;
};

export default ProtectedRoute;