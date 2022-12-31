
const contentData = [
    {
        blockTitle: "Education",
        blockContent: [
            {
                contentTitle: "High School",
                contentDetail: "2007 - 2011"
            },
            {
                contentTitle: "Bachelor Study",
                contentDetail: "2011 - 2014"
            }
        ]
    },
    {
        blockTitle: "Work experience",
        blockContent: [
            {
                contentTitle: "Fischer",
                contentDetail: "2007 - 2011"
            },
            {
                contentTitle: "TNT (Accenture)",
                contentDetail: "2011 - 2014"
            },
            {
                contentTitle: "BMW financial Services",
                contentDetail: "2014 - 2018"
            }
        ]
    },
    {
        blockTitle: "Test block single",
        blockContent: "test infor about such block"
    }
];

function ContentList(props) {
    
    if (!Array.isArray(props.blockContent)) {
        return <p>{props.blockContent}</p>
    } else {
        // return 
        // <p>{props.blockContent[0].contentTitle}</p>
        return <ul>
             { props.blockContent.map((element, index) => { return <li key={index}>{element.contentTitle}</li>})} 
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

function Content() {
    return (
        <div className="content">
           {
            contentData.map((contentElement, index) => {
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
export {contentData};