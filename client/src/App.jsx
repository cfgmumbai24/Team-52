
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header/Header';
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {

  return (
    <Router>
      <div className='flex flex-col gap-4 '>
        <Header />
        <Routes />
        <Footer />
      </div>
    </Router>
  )
}

export default App;
