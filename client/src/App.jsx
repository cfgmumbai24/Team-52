
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header/Header';
import Routes from "./Routes";
import { BrowserRouter as Router, useLocation } from "react-router-dom";

const Main = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className='flex flex-col gap-4 '>
      {
        path === "/login" ? null : <Header />
      }
      <Routes />
      {path === "/login" ? null : <Footer />}
    </div>
  )
}

function App() {


  return (
    <Router>
      <Main />
    </Router>
  )
}

export default App;
