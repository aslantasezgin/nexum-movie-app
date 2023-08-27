
import Router from "./router/Router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CookieConsent from "./components/cookie/CookieConsent";
function App() {



  return (
    <div className="main-wrapper">
      <Router/>
      <CookieConsent></CookieConsent>
      <ToastContainer />
    </div>
  )
}

export default App;
