import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PublicRouter from "./pages/Public/PublicRouter";
import AdminRouter from "./pages/Admin/AdminRouter";

function App() {
  return (
      <div className="container">
          <BrowserRouter>
              <Routes>
                  {/* l'étoile "*" indique au Router que derrière on a encore de l'enfant */}
                  <Route path="/*" element={<PublicRouter/>}/>
                  <Route path="/admin/*" element={<AdminRouter/>}/>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;