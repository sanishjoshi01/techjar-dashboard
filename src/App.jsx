import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './ProtectedRoute';
import GuestRoute from './GuestRoute';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route 
        path='/login' 
        element={
          <GuestRoute>
            <SignIn/>
          </GuestRoute>
          }
          />

        <Route 
          path='/dashboard' 
          element={
           <ProtectedRoute>
            <Dashboard/>
           </ProtectedRoute>
          }
        />
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </Router>
  )
}

export default App;