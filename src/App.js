import { Nav, Donation, Footer } from './components'
import { Home } from './pages'
import './App.css';

function App() {
  return (
    <div className='container'>
    <Nav />
    <Home />
    <Donation />
    <Footer />
    </div>
  );
}

export default App;
