import "./App.css";
import imgPresentation from "./assets/presentation-image.webp";
import { useState } from "react";
import Quiz from "./components/Quiz";
function App() {
  const [welcome, setWelcome] = useState(true);
  const closeWelcome = () => {
    setWelcome(!welcome);
  };

  return (
    <div className="App">
      {welcome && (
        <div className="container">
          <div className="presentation">
            <div className="presentation-title">
              <h1>BENVENUTI A RENT CITY</h1>
            </div>
            <div className="presentation-text">
              <p>
                Fausto è un piccolo imprenditore e deve andare della parte Est
                di Rent City per un'importante riunione in azienda.
              </p>
            </div>
          </div>

          <div className="presentation-image">
            <img src={imgPresentation} alt="img-pres" />
          </div>

          <button onClick={closeWelcome} className="btn">
            AVANTI
          </button>
        </div>
      )}
      {!welcome && <Quiz quiz/>}
      
    </div>
  );
}

export default App;
