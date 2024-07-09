import React from "react";

const Enemy = (props) =>
{
    return (
        <div className="enemy_container">
            <div className="fight_character">
                <input className="fight_name" value={props.name}/>
                <img className="enemy_img" src={props.img}/>
                <div className="health_bar">{props.health}</div>
            </div>
        </div>
    )
}

export default Enemy