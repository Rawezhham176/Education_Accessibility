import { Footer } from './components'
import { Home, Student, Teacher, Classes } from './pages'
import './styles/App.css';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

function App() {
  return (
    <div className='container'>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path='/' element={ <Home /> } /> 
            <Route path='/studentpage' element={ <Student /> } />
            <Route path='/teacher' element={ <Teacher /> } />
            <Route path="/classes" element={ < Classes /> } />
          </Routes>
            <Footer />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
