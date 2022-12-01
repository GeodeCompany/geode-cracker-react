import logo from './logo.svg';
import './App.css';

import BannerTop from "./Banner/Banner-top";
import BannerBottom from "./Banner/Banner-bottom";
import Syntax from "./Syntax/Syntax";
import Settings from "./Settings/Settings";
import Collection from "./Collection/Collection-page";

import { Routes, Route, BrowserRouter as Router} from  'react-router-dom';

function App() {
  return (
    <Router>
      <BannerTop />
      <Routes>
        <Route path="/" >
          <Route index element={<h1>Home Pagina</h1>} />
          <Route path="syntax" element={[<Syntax />]} />
          <Route path="settings" element={[<Settings />]} />
          <Route path="*" element={<h1>Fallback 404</h1>} />
          <Route path="collection" element={[<Collection />]} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
