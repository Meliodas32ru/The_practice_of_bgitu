import React from "react";
import Character from "./Lobby/character";


class Lobby extends React.Component
{
    render()
    {
        return(
            <>
                <div className="lobby_bg">
                    <div className="characters_block">
                        <Character />
                        <Character />
                        <Character />
                        <Character />
                    </div>
                </div>
            </>
        )
    }
}

export default Lobby