import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Gallery from "./component/Gallery";
import About from "./component/About";
import Menu from "./component/Menu";
import Review from './component/Review';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Gallery />
      <Review />
    </div>
  );
};

export default App;
