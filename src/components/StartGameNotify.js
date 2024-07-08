import React from "react";
import Sage from "../../src/media/images/The_Sage.png"

const startGameNotify = (props) =>
{
    return(
        <div className="lobby_bg">
            <div className="SGN_textbox">
                <p>Good day, wanderers. What brought you to this ill-fated place? Although don't answer, I know
                    myself...riches, oh, this gold stored in the depths of this castle, I have been meeting and seeing
                    off people like you for many years, but every time I hope that people will return safely. Well, I
                    wish you success, beware of dangerous monsters.</p>
            </div>
            <div className="SGN_container">
                <div></div>
                <div>
                    <img className="SGN_img" src={Sage}/>
                </div>

                <div>
                    <button className="continue">Continue</button>
                </div>

            </div>

        </div>
    )
}

export default startGameNotify;