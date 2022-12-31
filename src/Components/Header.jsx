import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

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

function Header() {
    return <div className="header content-odd">
        <img src="/logo192.png" className="personal-img" alt="logo" />
            <table>
                <tbody>
                    {Object.keys(infoData).map((key,index) => <Info key={index} name={key} value={infoData[key]} />)}
                </tbody>
            </table>
    </div>;
}

export default Header;