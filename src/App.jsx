import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignIn/>}/>
      </Routes>
    </Router>
  )
}

export default App;