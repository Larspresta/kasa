import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Accommodation from "./pages/Accommodation";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";

import accommodationsData from "./data/data.json";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage accommodations={accommodationsData} />} />
        <Route path="homepage" element={<Homepage accommodations={accommodationsData} />} />
        <Route
          path="accommodation/:accommodationId"
          element={<Accommodation accommodations={accommodationsData} />}
        />
        <Route path="about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
