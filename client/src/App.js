import "./App.css";
import Header from "./components/headers/Header";
import Pages from "./components/pages/Pages";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "./GlobalState";

function App() {
  return (
    <DataProvider>
    <Router>
      <div className="App">
        <Header />
        <Pages />
      </div>
    </Router>
    </DataProvider>
  );
}

export default App;
