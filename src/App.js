import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

class App extends React.Component {

  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

export default App;
