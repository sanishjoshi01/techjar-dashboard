import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<SignIn/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;