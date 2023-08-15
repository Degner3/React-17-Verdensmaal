import style from "./Header.module.scss"


import ColorWheel from "../../assets/Image/ColorWheel.png"


export function Header() {

    return (
        <header className={style.headerbg}>
            <img src={ColorWheel} alt="Color Wheel" />
            <div>
                <h1>THE GLOBAL GOALS</h1>
                <p>For sustainable Developement</p>
            </div>
        </header>
    )
}