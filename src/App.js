import './App.css';
import Navbar from './Navbar';
import GetPlaceApi from "./components/GetPlaceApi";

function App() {
  return (
      <div className="container">
          <Navbar/>
          <div className="listPlaceApi"></div>
          <GetPlaceApi/>
          <div className="viewMap"></div>
          <div className="navBar"></div>
      </div>
  );
}

export default App;
