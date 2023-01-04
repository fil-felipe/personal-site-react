import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {contentData} from "./Content";

function LangButton(props) {
    return <img src={"/"+props.lang+".png"} width="30" height="30" className="d-inline-block align-top" alt="logo" onClick={(event) => {
        props.handleLangClick(props.lang);
        event.preventDefault(); /* decide if we really don't want to refresh page. mainly in case of pdf creation */
        }}/>
}



function NavbarOwn(props) {
    return <Navbar expand="lg" sticky="top" className="navbar-own">
        <Container fluid>
            <Navbar.Brand href="#">
            <img src="/favicon.ico" width="30" height="30" className="d-inline-block align-top" alt="logo" />
                {'  '}
                Filip Adamek
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar id="basic-navbar-nav" className="justify-content-center">
                <Nav>
                    <Nav.Link href="#eng"><LangButton lang="eng" handleLangClick={props.handleLangClick}/></Nav.Link>
                    <Nav.Link href="#pl"><LangButton lang="pl" handleLangClick={props.handleLangClick}/></Nav.Link>
                </Nav>
            </Navbar>
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                    {props.content.map((element,index) => {return <Nav.Link key={index} href={"#" + element.blockTitle}>{element.blockTitle}</Nav.Link>})}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}

export default NavbarOwn;