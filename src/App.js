import './App.css';
import {BrowserRouter} from "react-router-dom";

import PublicRouter from "./pages/Public/PublicRouter";

function App() {
  return (
      <div className="container">
          <BrowserRouter>
            <PublicRouter/>
          </BrowserRouter>
      </div>
  );
}

export default App;