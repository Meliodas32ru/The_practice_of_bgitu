import React from "react";

const Path = (props) =>
{
    return(
        <div className="path_bg">
            <div className="path_row">
                <button className="treasure_btn">Treasure</button>
                <button className="fight_btn">Fight</button>
            </div>
            <div className="score_container">
                <p className="score_text">Score</p>
                <p className="score_value">1000</p>
            </div>
        </div>
    )
}

export default Path;