import style from "./Verdensmaal.module.scss"

export function Verdensmaal() {

    return ( 
        <section id="verdensmaal" className={style.verdensmaal}>
            <div className={style.div1}>
                <h3>DE 17 VERDENSMÅL</h3>
                <p className={style.part1}>På FN topmødet i New York i 2015 vedtog verdens stats- og regeringsledere en hidtil uset ambitiøs og samfundsforandrende udviklingsdagsorden, også kaldt 2030 dagsordenen.</p>
                <p className={style.part2}>Frem til 2030 skal denne dagsorden sætte kurs mod en mere bæredygtig udvikling for både mennesker og planeten, vi bor på.</p>
            </div>
            
            <div className={style.divwrapper}>
                <article className={style.art1}>
                    <h4>Verdensmålene forpligter.</h4>
                    <p>Medlemslandende forpligter sig til helt at afskaffe fattigdom og sult i verden, sikre god uddannelse og sundhed til alle, reducere ulighed, fremme ligestilling, anstændige jobs, bæredygtig vækst og forbrug.<br />
                    <br />
                    Den nye dagsorden anerkender således at social, økonomisk og miljømæssig udvikling, fred, sikkerhed og internationalt samarbejde er tæt forbundet, og at det kræver en integreret indsats at opnå holdbare udviklingsresultater.</p>
                </article>
                <article className={style.art2}>
                    <h4>Verdensmålene gælder alle.</h4>
                    <p>Målene gælder alle lande - både rige og fattige - dvs. de er universelle.<br />
                    <br />
                    Udfordringer som social, økonomisk  marginalisering, stigende ulighed, fødevareusikkerhed,  ulig adgang til grundlæggende naturressourcer,og har regionale og globale konsekvenser.<br />
                    Det er derfor afgørende at alle lande leverer og løfter opgaven i fællesskab.</p>
                </article>
            </div>
        </section>
    )
}