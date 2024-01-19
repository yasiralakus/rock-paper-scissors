export default function Home() {


    return (
        <>

            <div className="home">

                <div className="top">
                    <button><img src="./img/paper.png" alt="" /></button>
                    <button><img src="./img/scissors.png" alt="" /></button>
                </div>

                <div className="bottom">
                    <button><img src="./img/rock.png" alt="" /></button>
                </div>

            </div>

           {/* <Rules /> */}

            <button id="ruleBtn">RULES</button>

        </>
    )
}

function Rules() {

    return (
        <div className="rules">

            <div className="rulesHeader">
                <h3>RULES</h3>
                <button><i class="fa-solid fa-xmark"></i></button>
            </div>

            <div className="rulesContent">

                <div className="rulesContentTop">

                    <img src="./img/rules/graypaper.png" alt="" />
                    <img src="./img/rules/arrow.png" alt="" />
                    <img src="./img/rules/grayscissors.png" alt="" />

                </div>

                <div className="rulesContentBottom">

                    <div className="bottomTop">
                        <img src="./img/rules/arrowbottom1.png" alt="" />
                        <img src="./img/rules/arrowbottom2.png" alt="" />
                    </div>

                    <div className="bottomBottom">
                        <img src="./img/rules/grayrock.png" alt="" />
                    </div>

                </div>


            </div>

        </div> 
    )
}