import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Homepage from "./pages/Homepage";

//Primary: #1e88e5
//Light: #6ab7ff
//Dark: #005cb2

function App() {
  return (
    <div className="App">
      <Router>
        <Homepage />
      </Router>
    </div>
  );
}

export default App;
