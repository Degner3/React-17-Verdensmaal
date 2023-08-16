import style from "./Delmaalene.module.scss"



import Goal1 from "../../assets/Image/Goals/Goal1.png"
import Goal2 from "../../assets/Image/Goals/Goal2.png"
import Goal3 from "../../assets/Image/Goals/Goal3.png"
import Goal4 from "../../assets/Image/Goals/Goal4.png"
import Goal5 from "../../assets/Image/Goals/Goal5.png"
import Goal6 from "../../assets/Image/Goals/Goal6.png"
import Goal7 from "../../assets/Image/Goals/Goal7.png"
import Goal8 from "../../assets/Image/Goals/Goal8.png"
import Goal9 from "../../assets/Image/Goals/Goal9.png"
import Goal10 from "../../assets/Image/Goals/Goal10.png"
import Goal11 from "../../assets/Image/Goals/Goal11.png"
import Goal12 from "../../assets/Image/Goals/Goal12.png"
import Goal13 from "../../assets/Image/Goals/Goal13.png"
import Goal14 from "../../assets/Image/Goals/Goal14.png"
import Goal15 from "../../assets/Image/Goals/Goal15.png"
import Goal16 from "../../assets/Image/Goals/Goal16.png"
import Goal17 from "../../assets/Image/Goals/Goal17.png"
import Goal18 from "../../assets/Image/Goals/Goal18.png"






export function Delmaalene() {

    return (
        <section id="delmaalene" className={style.delmaalene}>
            <figure>
                <figcaption>
                    <h3>DELMÅLENE</h3>
                    <h5><a href="#top">Tilbage til top</a></h5>
                    <p>FN's 17 Verdensmål er opdelt i 169 delmål. Delmålene er mere konkrete mål for, hvordan Verdensmålene skal opfyldes. For at måle på hvert delmål har FN formuleret en række indikatorer for de enkelte delmål.</p>
                    <i><b>Se eksempler på enkelte delmål her:</b></i>
                </figcaption>
                <div className={style.gallerywrapper}>
                    <img src={Goal1} alt="Goal1" />
                    <img src={Goal2} alt="Goal2" />
                    <img src={Goal3} alt="Goal1" />
                    <img src={Goal4} alt="Goal1" />
                    <img src={Goal5} alt="Goal1" />
                    <img src={Goal6} alt="Goal1" />
                    <img src={Goal7} alt="Goal1" />
                    <img src={Goal8} alt="Goal1" />
                    <img src={Goal9} alt="Goal1" />
                    <img src={Goal10} alt="Goal1" />
                    <img src={Goal11} alt="Goal1" />
                    <img src={Goal12} alt="Goal1" />
                    <img src={Goal13} alt="Goal1" />
                    <img src={Goal14} alt="Goal1" />
                    <img src={Goal15} alt="Goal1" />
                    <img src={Goal16} alt="Goal1" />
                    <img src={Goal17} alt="Goal1" />
                    <img src={Goal18} alt="Goal1" />
                </div>
            </figure>
        </section>
    )
}