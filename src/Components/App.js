
import NavbarOwn from './Navbar';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import dataInput from '../content';
import { useState } from 'react';

function App() {
  const [content, setContent] = useState(dataInput.find(element => element.language === "eng"));

  function setDataLang(language) {
    return setContent(dataInput.find(element => element.language === language));
  }

  return (
    <div className="App">
      <NavbarOwn content={content.content.mainData} handleLangClick={setDataLang}/>
      <div className="Site">
      <div className="Site-content">
        <Header content={content.content.headerData}/>
        <Content content={content.content.mainData}/>
      </div>
      <Footer />
    </div>
    </div>

  );
}

export default App;
