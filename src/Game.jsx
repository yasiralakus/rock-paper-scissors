import { useState } from "react"

export default function Game() {

    const [otherPick, setOtherPick] = useState(false);
    const [areYouWin, setAreYouWin] = useState(false);

    return (
        <div className="game">

            <div className="yourPicked">

                <h4>YOU PICKED</h4>

                <img src="./img/rock.svg" alt="" />

            </div>

            <div className="results">

                {areYouWin === true && <h2>YOU WIN</h2>}
                {areYouWin === false && <h2>YOU LOSE</h2>}

                <button>TEKRAR OYNA</button>

            </div>

            <div className="otherPicked">

                <h4>THE HOUSE PICKED</h4>

                {otherPick === false ? <div className="noPick"></div> : ''}

            </div>

            <button id="ruleBtn">RULES</button>

        </div>
    )
}