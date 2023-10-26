import Section from './Section';

function Main(props) {
    return (
      <div class="main">
        <Section
          lang={props.lang}
          Content={props.Content.content.mainData[0]}
          // SectionName={props.Content.content.mainData[0].blockTitle}
          // SectionInfo="My Eduction journey was very interesting..."
          // SectionDetails={props.Content.content.mainData[0].blockContent}
        />
              <Section
          lang={props.lang}
          Content={props.Content.content.mainData[1]}
          // SectionName={props.Content.content.mainData[1].blockTitle}
          // SectionDetailName={props.Content.content.mainData[1].blockContentTitle}
          // SectionDetails={props.Content.content.mainData[1].blockContent}
        />
        <Section
          lang={props.lang}
          Content={props.Content.content.mainData[2]}
          // SectionName={props.Content.content.mainData[2].blockTitle}
          // SectionDetails={props.Content.content.mainData[2].blockContent}
        />
      </div>

    );
  }
  
  export default Main;