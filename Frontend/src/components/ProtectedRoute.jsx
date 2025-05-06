import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isAuthLoading } = useSelector((store) => store.auth);
  if (isAuthLoading) return <div>Checking authentication...</div>;

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export const InstructorRoute = ({ children }) => {
  const { user, isAuthenticated, isAuthLoading } = useSelector(
    (store) => store.auth
  );

  if (isAuthLoading) return <div>Checking authentication...</div>;

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (user?.role !== "instructor") {
    return <Navigate to="/" />;
  }

  return children;
};
