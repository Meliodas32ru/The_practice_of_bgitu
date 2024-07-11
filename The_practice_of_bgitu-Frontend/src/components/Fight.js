import React from "react";
import warrior from "../media/images/warrior.jpg"
import mage from "../media/images/mage.jfif"
import archer from "../media/images/archer.jpg"
import rogue from "../media/images/assasin.jpg"
import FightCharacter from "./Fight/FightCharacter";
import FightActions from "./Fight/FightActions";
import goblin from "../media/images/goblin.jpg"
import Enemy from "./Fight/Enemy";
import {useLocation} from "react-router-dom";

const Fight = (props) =>
{
    const Data = useLocation();
    const value = Data.state.value
    const tag = Data.state.tag
    const client = Data.state.client

    return(
        <div className="fight_bg">
            <div className="fight_row fight_row_up_padding">
                <FightCharacter img={warrior} name={value.length >0?value[0].userName : "None"} health={"20/20"} padding={"pl-15"}/>
                <FightActions name={client } attack = {Attack} defense = {Defense}/>

                <FightCharacter img={mage} name={value.length >1?value[1].userName : "None"} health={"20/20"} padding={"pr-15"}/>
            </div>
            <div className="fight_row fight_row_down_padding">
                <FightCharacter img={archer} name={value.length >2?value[2].userName : "None"} health={"20/20"} padding={"pl-15"}/>
                <Enemy name={"Enemy"} health={"40/40"} img={goblin}/>
                <FightCharacter img={rogue} name={value.length >3?value[3].userName : "None"} health={"20/20"} padding={"pr-15"}/>
            </div>
            <div className="score_container">
                <p className="score_text">Score</p>
                <p className="score_value" dangerouslySetInnerHTML={{ __html: value[value.length-1] }} />
            </div>
        </div>
    )

    function Attack(){
        console.log("attack attack attack attack ----------------");
    }
    
    function Defense(){
        console.log("defense defense defense defense ----------------");
    }
}

export default Fight