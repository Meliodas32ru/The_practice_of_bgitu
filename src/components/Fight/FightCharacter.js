import React, {useEffect, useState} from "react";
import warrior from "../../media/images/warrior.jpg";
import fight from "../Fight";

const FightCharacter = (props) =>
{
    let [fightCharacterClass, setFightCharacterClass] = useState("fight_character")
    let [healthBarStyle, setHealthBarStyle] = useState("health_bar")
    let padding_activated = false
    let health_hidden = false
    useEffect(() =>
    {
        if(props.padding !== undefined && !padding_activated)
        {
            setFightCharacterClass("fight_character " + props.padding)
            padding_activated = true
        }
        if(props.health === undefined && !health_hidden)
        {
            setHealthBarStyle("health_bar d-none")
        }
    }, [props.padding, fightCharacterClass, setFightCharacterClass]);
    return (
        <div className={fightCharacterClass}>
            <img src={props.img}/>
            <input className="fight_name" value={props.name}/>
            <div className={healthBarStyle}>{props.health}</div>
        </div>
    )
}

export default FightCharacter;