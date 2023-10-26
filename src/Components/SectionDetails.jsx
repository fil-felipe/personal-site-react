import {useState} from 'react';

import DetailElement from './DetailElement';


function SectionDetails(props) {
    const [visible,setVisible] = useState(false);

    function changeView() {
        setVisible((prevInfo) => {
            return prevInfo ? false : true
        })
    }

    return (
        <div>
            <h3 class="section-header" onClick={changeView}>
                {props.Content.blockContentTitle ? props.Content.blockContentTitle : (props.lang === "pl") ? "Szczegóły:" : "Details:"}
                {(props.lang === "pl" && !visible) && " (Kliknij aby rozwinąć) " }
                {(props.lang !== "pl" && !visible) && " (Click to expand)" }
            </h3>
            {props.Content.blockContent.map((element) => 
                <DetailElement { ... props } blockContent={element} isVisible={visible}/>
            )}
        </div>
    );
}

export default SectionDetails;