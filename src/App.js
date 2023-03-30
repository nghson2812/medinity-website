import './App.css';
import NavBar from './Components/NavBar/NavBar';
import LandingPage from "./Page/LandingPage/LandingPage";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <NavBar/>
        <LandingPage />
        <Footer />
    </div>
  );
}

export default App;
