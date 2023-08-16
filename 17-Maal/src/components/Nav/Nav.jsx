import style from "./Nav.module.scss"


export function Nav() {

    return (
        <nav className={style.nav}>
                <ul>
                    <li><a href="#verdensmaal">VERDENSMÅLENE</a></li>
                    <li><a href="#delmaalene">DELMÅLENE</a></li>
                    <li><a href="#udfordringer">UDFORDRINGER</a></li>
                    <li><a href="#">KONTAKT</a></li>
                </ul>
        </nav>
    )
}