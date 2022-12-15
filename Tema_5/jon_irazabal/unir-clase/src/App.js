import logo from "./logo.svg";
import Navbar from './components/Navbar';
import Card from './components/Card';
import './App.css';

function App() {
  return (
      <div className="app-container">
            <Navbar />

          <div className="card-container">
            <Card></Card>
          </div>
      </div>
  );
}

export default App;
