import { Navigate } from "react-router-dom";
import { useAuth } from "./context/useAuth";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();
    console.log(user);

    return user ? children : <Navigate to="/login" />
};

export default ProtectedRoute;