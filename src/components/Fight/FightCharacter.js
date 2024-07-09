import React, {useEffect, useState} from "react";
import warrior from "../../media/images/warrior.jpg";
import fight from "../Fight";

const FightCharacter = (props) =>
{
    let [fightCharacterClass, setFightCharacterClass] = useState("fight_character")
    let activated = false
    useEffect(() =>
    {
        if(props.padding !== undefined && !activated)
        {
            setFightCharacterClass("fight_character " + props.padding)
            activated = true
        }
    }, [props.padding, fightCharacterClass, setFightCharacterClass]);
    return (
        <div className={fightCharacterClass}>
            <img src={props.img}/>
            <input className="fight_name" value={props.name}/>
            <div className="health_bar">{props.health}</div>
        </div>
    )
}

export default FightCharacter;