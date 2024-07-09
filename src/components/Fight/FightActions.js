import React, {useState} from "react";
import sword_img from "../../media/images/pinpng.com-crossed-swords-png-1084740.png";
import shield from "../../media/images/shield-png-23059.png";
import sword_active from "../../media/images/sw2.gif"

const FightActions = (props) =>
{
    let [sword, setSword] = useState(sword_img)
    return (
        <div className="fight_actions">
            <p>{props.name + "'s turn"}</p>
            <button onMouseOut={attackMouseOut} onMouseMove={attackMouseIn}>Attack <img src={sword}/></button>
            <button>Defense <img src={shield}/></button>
        </div>
    )

    function attackMouseIn(e)
    {
        setSword(sword_active)
    }

    function attackMouseOut(e)
    {
        setSword(sword_img)
    }
}

export default FightActions;