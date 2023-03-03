import React, { useState, useEffect } from 'react';
import './App.scss';

// Bootstrap
import Footer from "./components/UI/Footer/Footer";
import About from './components/About/About';
import Projects from './components/Projects/Projects';

import useUserData from "./hooks/useUserData";
import Header from "./components/UI/Header/Header";
import Main from "./components/Main/Main";

const App = (props) => {
  const [currentBody, setCurrentBody] = useState(<About />);
  const data = useUserData();

  const setCurrentBodyHandler = (selectedKey) => {
    var body = <About />;
    switch (selectedKey) {
      case "About":
        body = <About />;
        break;
      case "projects":
        body = <Projects />;
        break;
      default:
        break;
    }
    setCurrentBody(body);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    document.title = data.getUser().documentTitle;
  }, [data]);

  return (
    <div className="App">
      <Header variant="dark" bg="dark" handleClick={setCurrentBodyHandler} />
      <Main>
        {currentBody}
      </Main>
      <Footer />
    </div>
  );
};

export default App;
