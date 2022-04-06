import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import About from "./pages/about";
import Home from "./pages/home";
import Works from "./pages/works";

export default function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.WORKS} element={<Works />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
