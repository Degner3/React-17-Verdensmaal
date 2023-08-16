import style from "./Footer.module.scss"

import PartnerUNDP from "../../assets/Image/Partner-UNDP-Full.png"


export function Footer() {


    return (
        <footer className={style.footer}>
            <div className={style.footerwrapper}>
                <ul>
                    <li><h2>Eksterne Links:</h2></li>
                    <li><a href="https://www.verdensmaalene.dk/">https://www.verdensmaalene.dk/</a></li>
                    <li><a href="https://www.globalgoals.org/">https://www.globalgoals.org/</a></li>
                    <li><a href="https://www.un.org/sustainabledevelopment/">https://www.un.org/sustainabledevelopment/</a></li>
                    <li><a href="https://worldslargestlesson.globalgoals.org/">https://worldslargestlesson.globalgoals.org/</a></li>
                    <li><a href="https://www.unenvironment.org/">https://www.unenvironment.org/</a></li>
                    <li><a href="https://ve.dk/klimaberegner/">https://ve.dk/   klimaberegner/</a></li>
                </ul>
                <ul>
                    <li><h2>Ressourcer:</h2></li>
                    <li><a href="#">Bliver Verden Bedre</a></li>
                    <li><a href="#">Spotlight Rapport</a></li>
                </ul>
                <img src={PartnerUNDP} alt="Partner UNDP" />
            </div>
        </footer>


    )
}