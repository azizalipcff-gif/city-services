import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: 'user' | 'business' | 'admin';
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiredRole }) => {
  const { user, profile, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#071126] flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#d4af37] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user || !profile) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole) {
    if (requiredRole === 'admin' && profile.role !== 'admin') {
      return <Navigate to="/" replace />;
    }
    if (requiredRole === 'business' && profile.role !== 'business') {
      return <Navigate to={profile.role === 'admin' ? '/admin' : '/user-dashboard'} replace />;
    }
    if (requiredRole === 'user' && profile.role !== 'user') {
      return <Navigate to={profile.role === 'business' ? '/business-dashboard' : profile.role === 'admin' ? '/admin' : '/login'} replace />;
    }
  }

  return <>{children}</>;
};

export default ProtectedRoute;