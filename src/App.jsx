import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import Page_01 from "./Pages/Page_01";
import Page_02 from "./Pages/Page_02";
import Page_03 from "./Pages/Page_03";

import Page_04 from "./Pages/Page_04";
import Page_05 from "./Pages/Page_05";
import Page_06 from "./Pages/Page_06";
import Page_07 from "./Pages/Page_07";

function Main() {
  const location = useLocation();

  return (
    <div>
      {location.pathname === "/" && (
        <>
          <h1>Welcome to My App</h1>
          <Link to="/page_01">
            <button>Home</button>
          </Link>
        </>
      )}
      <Routes>
       
        <Route path="/page_01" element={<Page_01 />} />
        <Route path="/page_02" element={<Page_02 />} />
        <Route path="/page_03" element={<Page_03 />} />
        <Route path="/page_04" element={<Page_04 />} />
        <Route path="/page_05" element={<Page_05 />} />
        <Route path="/page_06" element={<Page_06 />} />
        <Route path="/page_07" element={<Page_07 />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;
