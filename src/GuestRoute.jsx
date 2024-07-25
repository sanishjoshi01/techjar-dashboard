import { Navigate } from "react-router-dom";
import { useAuth } from "./context/useAuth";

// eslint-disable-next-line react/prop-types
const GuestRoute = ({ children }) => {
    const { user } = useAuth();

    return !user ? children : <Navigate to="/dashboard" />
};

export default GuestRoute;