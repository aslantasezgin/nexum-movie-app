import "./cookieConsent.css"
import { useState } from "react";


const  CookieConsent = () =>  {
    const [cookieAccepted, setCookieAccepted] = useState(false);
  
    const handleAccept = () => {
      setCookieAccepted(true);
    };
  
    if (!cookieAccepted) {
      return (
        <div className="cookie-consent">
          <p>Çerezleri kabul ediyor musunuz?</p>
          <button className="btn btn-primary" onClick={handleAccept}>Kabul Et</button>
        </div>
      );
    }
  }

  export default CookieConsent