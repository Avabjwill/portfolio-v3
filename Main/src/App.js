import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Page from "./components/Page";
import Footer from "./components/Footer";

function App() {
 
  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header currentPage={currentPage}  setCurrentPage={setCurrentPage}/>
      <Page currentPage={currentPage}/>
      <Footer/>
      <Nav currentPage={currentPage}/>
    </div>
  );
}

export default App;
