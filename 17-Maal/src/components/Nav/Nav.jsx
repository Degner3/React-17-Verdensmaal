import style from "./Nav.module.scss"


export function Nav() {

    return (
        <nav className={style.nav}>
            <div className={style.navwrapper}>
                <ul>
                    <li><a href="#">VERDENSMÅLENE</a></li>
                    <li><a href="#">DELMÅLENE</a></li>
                    <li><a href="#">UDFORDRINGER</a></li>
                    <li><a href="#">KONTAKT</a></li>
                </ul>
            </div>
        </nav>
    )
}