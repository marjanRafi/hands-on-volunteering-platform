import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Events from "./pages/Events";
import HelpRequests from "./pages/HelpRequests";
import Teams from "./pages/Teams";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/events" element={<Events />} />
        <Route path="/help-requests" element={<HelpRequests />} />
        <Route path="/teams" element={<Teams />} />
      </Routes>
    </Router>
  );
}

export default App;
