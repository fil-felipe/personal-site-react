import { useMediaQuery } from 'react-responsive';

function LangButton(props) {
    return <img src={"/"+props.lang+".png"} width="30" height="30" className="lang-button" alt="logo" onClick={(event) => {
            props.handleLangClick(props.lang);
            event.preventDefault(); /* decide if we really don't want to refresh page. mainly in case of pdf creation */
            }}/>
}

function NavbarOwn(props) {
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

    return (
        <div class="navbar-own">
            {isMobile ? <p>Test content</p> : <p>Test content Vig</p>}
            <div class="center-navbar">
                <h1 id="title">Filip Adamek - {props.lang === "pl" ? "Moja osobista strona" : "Personal Website"}</h1>
            </div>
            <div class="right-navbar">
                <LangButton lang="eng" handleLangClick={props.handleLangClick}/>
                <LangButton lang="pl" handleLangClick={props.handleLangClick}/>
            </div>
    </div>
);
}

export default NavbarOwn;