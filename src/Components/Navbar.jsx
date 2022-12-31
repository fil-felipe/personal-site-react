import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import {contentData} from "./Content";

function NavbarOwn() {
    // return <div className="navbar">
    //     <p>Main page</p>
    //     <p>About</p>
    //     <p>Contact</p>
    // </div> ;
    return <Navbar bg="light" expand="lg" sticky="top">
        <Container>
            <Navbar.Brand href="#">
            <img src="/favicon.ico" width="30" height="30" className="d-inline-block align-top" alt="logo" />
                {/* <img alt="" src="/logo.svg" width="30" height="30" className="d-inline-block align-top"/> */}
                {' '}
                Filip Adamek
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                <Nav>
                    <Nav.Link href="#"><img src="/poland.png" width="30" height="30" className="d-inline-block align-top" alt="logo" /></Nav.Link>
                    <Nav.Link href="#"><img src="/united-kingdom.png" width="30" height="30" className="d-inline-block align-top" alt="logo" /></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                {/* <Nav className="me-auto"> */}
                    {contentData.map((element,index) => {return <Nav.Link key={index} href={"#" + element.blockTitle}>{element.blockTitle}</Nav.Link>})}
                    {/* <Nav.Link href="#Footer">Footer</Nav.Link> */}
                    {/* <Nav.Link href="#Footer">Footer</Nav.Link> */}
                    {/* <Nav.Link href="#Footer">Footer</Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}

// function BasicExample() {
//     return (
//       <Navbar bg="light" expand="lg">
//         <Container>
//           <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link href="#home">Home</Nav.Link>
//               <Nav.Link href="#link">Link</Nav.Link>
//               <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2">
//                   Another action
//                 </NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action/3.4">
//                   Separated link
//                 </NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     );
//   }

export default NavbarOwn;