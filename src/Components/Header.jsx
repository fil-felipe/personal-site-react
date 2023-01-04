import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const infoData = {
    Name: "Filip Adamek",
    Birthdate: "04-05-1991",
    Birthplace: "Cracow (Poland)",
    Phone: "+48 512-737-700",
    Email: "filip.adamek@outlook.com"
}

function Info(props) {
    return <tr>
        <td><DoubleArrowIcon fontSize="small" /></td>
        <td className='td-element'>{props.name}</td>
        <td className='td-element'>:</td>
        <td className='td-element'>{props.value}</td>
    </tr>
}

function Header(props) {

    return <div className="header content-odd">
    <Container fluid >
        <Row>
        <Col md="auto">
            <img src="/logoFA.png" className="personal-img" alt="logo" />
        </Col>
        <Col className="personal-info">
        <table>
                    <tbody>
                        {props.content.map((element,index) => <Info key={element.headerTitle} name={element.headerTitle} value={element.headerContent} />)}
                    </tbody>
                </table> 
        </Col>
        </Row>
    </Container>
                

    </div>;
}

export default Header;