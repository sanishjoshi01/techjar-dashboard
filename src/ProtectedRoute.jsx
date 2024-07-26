import { Navigate } from "react-router-dom";
import { useAuth } from "./context/useAuth";

const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();

    return user ? children : <Navigate to="/login" />
};

export default ProtectedRoute;