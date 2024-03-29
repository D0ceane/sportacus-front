import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PublicRouter from "./pages/Public/PublicRouter";
import AdminRouter from "./pages/Admin/AdminRouter";
import AuthRouter from "./pages/Auth/AuthRouter";
import AuthProvider from "./pages/Auth/AuthProvider";

function App() {
  return (
      <div className="container">
          <BrowserRouter>
              <Routes>
                  {/* l'étoile "*" indique au Router que derrière on a encore de l'enfant */}
                  <Route path="/*" element={<PublicRouter/>}/>
                  <Route path="/admin/*" element={
                      <AuthProvider>
                          <AdminRouter/>
                      </AuthProvider>
                  }/>
                  <Route path="/auth/*" element={<AuthRouter/>}/>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;