import { v4 as uuidv4 } from 'uuid';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import {useState} from 'react';


function stringContentType(string) {
    if (string.length > 20) {
        return <p>{string}</p>
    } else {
        return  "( " + string + " )"
    }
}

function ArrayConentType(props) {
    return <ul>
        {props.array.map(element => { return <li key={uuidv4()}> <DoubleArrowIcon fontSize="small" /> {element} </li> }
        )}
    </ul>
}

function ArrayElement(props) {
    const [visible,setVisible] = useState(false);

    function changeView() {
        setVisible((prevInfo) => {
            return prevInfo ? false : true
        })
    }

    return <li key={props.key} onClick={changeView} /*onMouseEnter={() => {setVisible(true)}}*/>
        <DoubleArrowIcon fontSize="small" /> 
        {props.contentTitle} 
        {props.contentString && stringContentType(props.contentString)} 
        {props.contentArray && visible && <ArrayConentType array={props.contentArray} />}  
    </li>
}



function ContentList(props) {

    if (!Array.isArray(props.blockContent)) {
        return <p>{props.blockContent}</p>
    } else {
        return <ul>
             { props.blockContent.map((element, index) => { 
                return <ArrayElement key={index} 
                    contentTitle={element.contentTitle && element.contentTitle} 
                    contentString={element.contentString && element.contentString} 
                    contentArray={element.contentArray && element.contentArray}
                    />
                })} 
            </ul>;
        }
}

function ContentElement(props) {
    const isOdd = (props.id % 2 === 0) ? false : true;
    return <div id={props.blockTitle} className={isOdd ? "content-odd" : "content-even"}>
        <h1>{props.blockTitle}</h1>
        <ContentList blockContent={props.blockContent} />
    </div>
}

function Content(props) {
    return (
        <div className="content">
           {
            props.content.map((contentElement, index) => {
                return <ContentElement 
                    key={index} 
                    id={index} 
                    blockTitle={contentElement.blockTitle} 
                    blockContent={contentElement.blockContent}
                />
           })
           }
        </div>
    );
}

export default Content;