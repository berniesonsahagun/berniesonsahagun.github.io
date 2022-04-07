import { Suspense } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import Home from "./pages/home";

export default function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
