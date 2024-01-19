import { Outlet } from "react-router-dom";

export default function App() {

    return (
        <div className="container">

            <header className="header">

                <img src="./img/logo.png" alt="" />

                <div className="scoreboard">

                    <p>SCORE</p>
                    <h3>12</h3>

                </div>

            </header>

            <main className="main">

                <Outlet />

            </main>

        </div>
    )
}