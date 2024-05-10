import "./App.css"
import logo from "./Roxiler.jpg"
import { AiOutlineMenu } from "react-icons/ai";
import AppStore from './component/Home'

function App() {
  return (
  <>
    <nav className="nav-bar">
      <div className="responsive-nav">
        <div className="logo-container">
          <img alt="logo" src={logo}/>
          <p className="app-title">Gokul</p>
        </div>
        <button className="menu-button"><AiOutlineMenu className="menu-logo"/></button>
      </div>
     
    </nav>
     <hr/>
     <AppStore/>
     </>
  );
}

export default App;
