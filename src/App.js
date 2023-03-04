import React, { useEffect } from 'react';
import './App.scss';

import useUserData from "./hooks/useUserData";
import Header from "./components/UI/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/UI/Footer/Footer";


const App = (props) => {
  const data = useUserData();

  useEffect(() => {
    document.title = data.getUser().documentTitle;
  }, [data]);

  return (
    <div className="App">
      <Header variant="dark" bg="dark" />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
