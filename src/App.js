import React from "react";
import WelcomePage from "./Pages/Landing/WelcomePage";
import RegistrationPage from "./Pages/Registration/RegistrationPage";
import TodoPage from "./Pages/Todo/TodoPage";
function App() {
  return (
    <React.Fragment>
      {/* <WelcomePage/>
      <RegistrationPage /> */}
      <TodoPage />
    </React.Fragment>
  );
}

export default App;
