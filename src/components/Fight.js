import React from "react";
import warrior from "../media/images/warrior.jpg"
import mage from "../media/images/mage.jfif"
import archer from "../media/images/archer.jpg"
import rogue from "../media/images/assasin.jpg"
import FightCharacter from "./Fight/FightCharacter";
import FightActions from "./Fight/FightActions";
import goblin from "../media/images/goblin.jpg"
import Enemy from "./Fight/Enemy";

const Fight = (props) =>
{
    return(
        <div className="fight_bg">
            <div className="fight_row fight_row_up_padding">
                <FightCharacter img={warrior} name={"Name"} health={"20/20"} padding={"pl-15"}/>
                <FightActions name={"Name"}/>
                <FightCharacter img={mage} name={"Name"} health={"20/20"} padding={"pr-15"}/>
            </div>
            <div className="fight_row fight_row_down_padding">
                <FightCharacter img={archer} name={"Name"} health={"20/20"} padding={"pl-15"}/>
                <Enemy name={"Enemy"} health={"40/40"} img={goblin}/>
                <FightCharacter img={rogue} name={"Name"} health={"20/20"} padding={"pr-15"}/>
            </div>
            <div className="score_container">
                <p className="score_text">Score</p>
                <p className="score_value">1000</p>
            </div>
        </div>
    )
}

export default Fight