

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer id="Footer">
            <p>Copyright © {currentYear}</p>
        </footer>
    )
}

export default Footer;