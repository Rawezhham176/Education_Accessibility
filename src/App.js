import { Footer } from './components'
import { Home, Student, Teacher } from './pages'
import './styles/App.css';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

function App() {
  return (
    <div className='container'>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path='/home' element={ <Home /> } /> 
            <Route path='/studentpage' element={ <Student /> } />
            <Route path='/teacher' element={ <Teacher /> } />
          </Routes>
            <Footer />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
