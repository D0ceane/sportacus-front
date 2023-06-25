import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUp from './pages/SignIn'
import Error from "./_utils/Error";
import Home from "./pages/Home";
import AddPlaceApi from "./components/AddPlaceApi";

function App() {
  return (
      <div className="container">
          <Navbar/>
          <BrowserRouter>
              <Routes>
                  <Route index element={<Home/>}/>
                  <Route path="/connexion" element={<SignUp/>}/>
                  <Route path="/accueil" element={<Home/>}/>
                  <Route path="/ajouter-lieu" element={<AddPlaceApi/>}/>
                  <Route path="*" element={<Error/>}/>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
