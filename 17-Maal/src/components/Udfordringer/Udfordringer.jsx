import style from "./Udfordringer.module.scss"


export function Udfordringer() {

    return (
        <section className={style.udfordringer}>
            <header>
                <h3>UDFORDRINGER</h3>
                <h5><a href="#">Tilbage til top</a></h5>
                <p>Der er en lang række faktorer der har indvirkning på opfyldelsen af de mål, man gennem aftaler har forpligtiget sig til.</p>
            </header>
            <h3>Vækst vs. bæredygtighed.</h3>
            <div>
                <article>
                    <p>En overordnet udfordring er, at der mangler et mere nuanceret syn på sammenhængen mellem vækst og bæredygtighed. Vægtning mellem økonomisk vækst og påvirkninger af miljø og samfund.</p>
                    <p>Opretholdes den nuværende globale, materielle vækst, øges presset på jordens ressourcer.</p>
                    <p>De livsunderstøttende økosystemer bliver i stigende grad overbelastet, og uligheden i verden vil blive større.</p>
                </article>
            </div>
            <h3>Leave no-one behind.</h3>
            <div>
                <article>
                    <p>I 2030-dagsordenen er inkluderet princippet om ”leave no one behind”. Princippet tilsiger, at alle lande skal opnå alle verdensmål, uden at nogen lades i stikken.</p>
                    <p>Arbejdet med verdensmålene skal begynde med, at de
                    fattigste og mest marginaliserede adresseres først.</p>
                    <p>Dette er et vigtigt princip, hvortil også efterlevelsen af og respekten for menneskerettigheder er altafgørende.</p>
                    <p>Med andre ord: “Leave No-One behind”.</p>
                </article>
            </div>
            <h3>Fattigdom og sult.</h3>
            <div>
                <article>
                    <p>Det første af FN’s verdensmål handler om at afskaffe verdens fattigdom inden 2030.</p>
                    <p>Det handler især om at give muligheder for mennesker i verdens fattigste lande. Verdensbanken definerer ”ekstrem fattigdom” som en personlig indkomst på under 1,9 dollars om dagen – dvs. cirka 13 kroner.</p>
                    <p>En stor udfordring, men vi er allerede godt på vej.</p>
                </article>
            </div>
        </section>
    )
}