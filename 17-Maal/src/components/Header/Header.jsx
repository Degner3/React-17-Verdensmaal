import style from "./Header.module.scss"


import ColorWheel from "../../assets/Image/ColorWheel.png"


export function Header() {

    return (
        <header className={style.headerbg}>
            <div className={style.headerwrapper}>
                <img src={ColorWheel} alt="Color Wheel" />
                <div>
                    <h1>THE GLOBAL GOALS</h1>
                    <h2>For sustainable Developement</h2>
                </div>
            </div>
        </header>
    )
}