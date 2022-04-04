import React from "react";
import { AppUi } from "./AppUi";
import { TodoProvider } from "../TodoContex";

function App() {
  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
}

export default App;
