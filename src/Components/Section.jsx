import {useState} from 'react';

import SectionDetails from './SectionDetails';
import SectionInfo from './SectionInfo';

function Section(props) {
    const [visible,setVisible] = useState(false);

    function changeView() {
        setVisible((prevInfo) => {
            return prevInfo ? false : true
        })
    }
    return (
        <div className={visible ? "section-clicked" : "section"} >
            <h2 class="section-header" onClick={changeView}>{props.Content.blockTitle}</h2>
            {visible && <SectionInfo { ... props }/>}
            {( visible) && <SectionDetails { ... props } />  }
        </div>
    );
}

export default Section;