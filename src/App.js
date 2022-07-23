import './App.css';
// import CustoemrDetailForm from './components/CustomerDetailsProceedToBook/CustomerDetailsForm';
import Footer from './components/Footer/Footer';
import MainRoutes from './components/MainRoutes';
import Navbar from './components/Navbar/Navbar';
import Processing from './pages/Processing';
// import { ScrollingExample } from './components/PaymentBox/Payment';
// import Packages from './pages/Packages';
// import ProceedToPaymentPage from './pages/ProceedToPaymentPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
      {/* <Processing /> */}
     <Footer />
    </div>
  );
}

export default App;
