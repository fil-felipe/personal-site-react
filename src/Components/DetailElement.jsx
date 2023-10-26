import {useState} from 'react';

function DetailElement(props) {

    return (
        <div class={props.isVisible ? "section-detail-clicked" : "section-detail"}>
            {(props.blockContent.contentString && props.isVisible) && 
                <div class="section-detail-string">
                    {props.blockContent.contentImg && <img src={props.blockContent.contentImg} class="logo-img"/>}
                </div>}
            <div class={"section-detail-list" + (props.isVisible ? " section-detail-list-clicked" : "")}>
                <h4>{props.blockContent.contentTitle}</h4>{props.blockContent.contentString}
                {!props.isVisible && " (" + props.blockContent.contentString + ")" }
                {(props.blockContent.contentArray && props.isVisible) && 
                    <ul>
                        {props.blockContent.contentArray.map((element, index) => {
                            return <li key={index}>{element}</li> 
                        })
                    }</ul>
                    }
            </div>
        </div>
    );
}

export default DetailElement;