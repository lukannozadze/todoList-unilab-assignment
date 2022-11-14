import React from "react";
import WelcomePage from "./Pages/Landing/WelcomePage";
import RegistrationPage from "./Pages/Registration/RegistrationPage";
import TodoPage from "./Pages/Todo/TodoPage";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
