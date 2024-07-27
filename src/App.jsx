import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import GuestRoute from "./GuestRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardPage from "./components/DashboardPage";
import OrdersPage from "./components/OrdersPage";
import CustomerPage from "./components/CustomerPage";

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route
          path="/login"
          element={
            <GuestRoute>
              <SignIn />
            </GuestRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard>
                <DashboardPage />
              </Dashboard>
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <Dashboard>
                <OrdersPage />
              </Dashboard>
            </ProtectedRoute>
          }
        />
        <Route
          path="/customer"
          element={
            <ProtectedRoute>
              <Dashboard>
                <CustomerPage />
              </Dashboard>
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
