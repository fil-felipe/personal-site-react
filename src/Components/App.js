
import dataInput from '../content';
import { useState } from 'react';
import NavbarOwn from './Navbar';
import HeaderBig from './HeaderBig';
import Main from './Main';
import Footer from './Footer';


function App() {
  const [content, setContent] = useState(dataInput.find(element => element.language === "eng"));

  function setDataLang(language) {
    return setContent(dataInput.find(element => element.language === language));
  }

  return (
    <div className="App">
      <NavbarOwn content={content.content.mainData} handleLangClick={setDataLang} lang={content.language}/>
      <HeaderBig Content={content.content.headerData} lang={content.language}/>
      <Main Content={content} lang={content.language}/>
      <Footer />
    </div>

  );
}

export default App;
