import React from "react";
import warrior from "../media/images/warrior.jpg"
import mage from "../media/images/mage.jfif"
import archer from "../media/images/archer.jpg"
import rogue from "../media/images/assasin.jpg"
import FightCharacter from "./Fight/FightCharacter";

const Win = (props) =>
{
    return(
        <div className="win_bg">
            <div className="fight_row fight_row_up_padding">
                <FightCharacter img={warrior} name={"Name"} padding={"pl-15"}/>
                <div className="win_info_block">
                    <h3>
                        Congratulations, you have successfully passed the dungeon and defeated the main boss, now all the treasures of the <span className="red">Dark Castle</span> are yours
                    </h3>
                </div>
                <FightCharacter img={mage} name={"Name"} padding={"pr-15"}/>
            </div>
            <div className="fight_row fight_row_down_padding">
                <FightCharacter img={archer} name={"Name"} padding={"pl-15"}/>
                <FightCharacter img={rogue} name={"Name"} padding={"pr-15"}/>
            </div>
            <div className="score_container">
                <p className="score_text">Score</p>
                <p className="score_value">1000</p>
            </div>
        </div>
    )
}

export default Win