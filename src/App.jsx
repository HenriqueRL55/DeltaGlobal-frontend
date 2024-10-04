// React
import React from "react";

// Application Routes
import AppRouter from "./routes/routers";

// Styles
import "././styles/App.css";

// Components
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
