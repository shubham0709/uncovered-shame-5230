import './App.css';
import MainRoutes from './components/MainRoutes';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      {/* <h1>WISHBERRY</h1> */}
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;
