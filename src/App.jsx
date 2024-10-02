import React from "react";
import AppRouter from "./routes/routers";
import "./App.css";
import Header from "./components/header/header";

function App() {
  return (
    <div className="App">
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
