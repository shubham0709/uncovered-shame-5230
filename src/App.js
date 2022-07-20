import './App.css';

import Slider from "./components/Slider/Slider";
import Homepage from './pages/Homepage';
import MainRoutes from './components/MainRoutes';

function App() {
  return (
    <div className="App">
      <h1>WISHBERRY</h1>
      <Slider />
      <Homepage />
      <MainRoutes />
    </div>
  );
}

export default App;
