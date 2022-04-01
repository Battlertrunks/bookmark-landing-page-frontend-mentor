import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import PageBody from "./components/PageBody";
import Footer from "./components/body/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <PageBody />
      <Footer />
    </div>
  );
}

export default App;
