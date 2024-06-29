import React from "react";
import Character from "./Lobby/character";


class Lobby extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            "id_1": false,
            "id_2": false,
            "id_3": false,
            "id_4": false,
            start_game_style: "start_game inactive",
            warrior_locked: false,
            mage_locked: false,
            archer_locked: false,
            rogue_locked: false,
        }
        this.changeState = this.changeState.bind(this)
        this.queryLocked = this.queryLocked.bind(this)
        this.lockPersType = this.lockPersType.bind(this)
    }
    render()
    {
        return(
            <>
                <div className="lobby_bg">
                    <div className="characters_block">
                        <Character lock={this.lockPersType} queryF={this.queryLocked} character_id={"id_1"} change={this.changeState}/>
                        <Character lock={this.lockPersType} queryF={this.queryLocked} character_id={"id_2"} change={this.changeState}/>
                        <Character lock={this.lockPersType} queryF={this.queryLocked} character_id={"id_3"} change={this.changeState}/>
                        <Character lock={this.lockPersType} queryF={this.queryLocked} character_id={"id_4"} change={this.changeState}/>
                    </div>
                    <div className="lobby_footer">
                        <input className="tag_input" placeholder="Tag"/>
                        <button className={this.state.start_game_style}>Start the Game</button>
                    </div>
                </div>
            </>
        )
    }
    changeState(idx)
    {
        if(idx === "id_1")
        {
            this.setState({"id_1": true})
        }

        if(idx === "id_2")
        {
            this.setState({"id_2": true})
        }

        if(idx === "id_3")
        {
            this.setState({"id_3": true})
        }

        if(idx === "id_4")
        {
            this.setState({"id_4": true})
        }

        if(this.state.id_1 && this.state.id_2 && this.state.id_3)
        {
            this.setState({start_game_style: "start_game"})
        }
    }

    lockPersType(ident)
    {
        switch (ident)
        {
            case 1: this.setState({warrior_locked: true}); break;
            case 2: this.setState({mage_locked: true}); break;
            case 3:  this.setState({archer_locked: true}); break;
            case 4:  this.setState({rogue_locked: true}); break;
        }
    }

    queryLocked(ident)
    {
        switch (ident)
        {
            case 1: return this.state.warrior_locked
            case 2: return this.state.mage_locked
            case 3: return this.state.archer_locked
            case 4: return this.state.rogue_locked
            default: return NaN
        }
    }
}

export default Lobby