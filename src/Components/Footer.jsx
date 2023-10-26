

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer id="footer">
            {/* <p>Copyright © {currentYear}</p> */}
            <p>Wyrażam zgodę na przetwarzanie danych osobowych zawartych w moim CV i w innych dokumentach dołączonych do CV (moje
zgłoszenie rekrutacyjne), dla celów prowadzenia rekrutacji na stanowisko wskazane w ogłoszeniu o pracę.
Dodatkowo zgadzam się na przetwarzanie przez pracodawcę danych osobowych zawartych w moim zgłoszeniu rekrutacyjnym dla
celów przyszłych rekrutacji.</p>
        </footer>
    )
}

export default Footer;