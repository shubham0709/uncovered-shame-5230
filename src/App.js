import './App.css';
import Footer from './components/Footer/Footer';
import MainRoutes from './components/MainRoutes';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
