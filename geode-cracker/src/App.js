import logo from './logo.svg';
import './App.scss';

import BannerTop from "./Banner/Banner-top";
import BannerBottom from "./Banner/Banner-bottom";
import Syntax from "./Syntax/Syntax";
import Settings from "./Settings/Settings";
import Collection from "./Collection/Collection";
import MascotChoice from "./Mascot/MascotFullscreenChoice";
import MascotNext from "./Mascot/MascotFullscreenNext";
import MascotHelp from "./Mascot/MascotHelp";

import Polish from "./Polish/Polish"

import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <BannerTop />
      <Settings />
      <Routes>
        <Route path="/">
          <Route index element={[<Polish />]} />
          <Route path="syntax" element={[<Syntax />]} />
          <Route path="settings" element={[<Settings />]} />
          <Route path="mascot/choice" element={[<MascotChoice />]} />
          <Route path="mascot/help" element={[<MascotHelp />]} />
          <Route path="mascot/next" element={[<MascotNext />]} />
          <Route path="collection" element={[<Collection />]} />



          <Route path="*" element={<h1>Fallback 404</h1>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
