import "./Footer.css";

function Footer(){
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Hamro Ghar. All rights reserved</p>
        </footer>
    );
}

export default Footer;