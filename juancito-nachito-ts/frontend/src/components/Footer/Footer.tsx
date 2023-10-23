import Styles from '../Footer/Footer.module.css'

const Footer = () => {
    return(
        <div className={Styles.footer}>
        <footer >
            Esta app esta desarrollada por Luquitas bajo supervición de Juancito y Nachito.
            <hr />
            © 2023
        </footer>
        </div>
    )
}

export default Footer;