import Navbar from "./components/navbar/navbar";
import "./App.css"
import Intro from "./components/intro/intro";
import Services from "./components/services/services";
import Knowledge from "./components/knowledge/knowledge";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import { themeContext } from "./Context";
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="App"
    style={{
      background: darkMode? 'black': '',
      color: darkMode? 'white': ''
    }}
    >
    
     <Navbar/>
     <Intro/>
     <Services/>
     <Knowledge/>
     <Portfolio/>
    
     <Footer/>
    </div>
  );
}

export default App;
