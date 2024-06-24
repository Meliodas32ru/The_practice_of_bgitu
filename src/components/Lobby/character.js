import React from "react";
import warrior from "../../media/images/warrior.jpg"
import mage from "../../media/images/mage.jfif"
import archer from "../../media/images/archer.jpg"
import rogue from "../../media/images/assasin.jpg"
import CharacterClass from "./character_class";

class character extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            character_choice_style: "character_choice d-none",
            no_character_style: "no_character",
        }
        this.mouseEnter = this.mouseEnter.bind(this)
        this.mouseLeave = this.mouseLeave.bind(this)
    }
    render()
    {
        return (
            <>
                <div className="character_box">
                    <div className="character" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                        <h2 className={this.state.no_character_style}>?</h2>
                        <div className={this.state.character_choice_style}>
                            <CharacterClass character_type="Warrior" img={warrior} />
                            <CharacterClass character_type="Mage" img={mage} />
                            <CharacterClass character_type="Archer" img={archer} />
                            <CharacterClass character_type="Rogue" img={rogue} />
                            <button className="not_yet_btn" onClick={this.mouseLeave}>Not yet</button>
                        </div>
                    </div>
                    <input className="lobby_input" placeholder="Name"/>
                </div>
            </>
        )
    }
    mouseEnter()
    {
        this.setState({character_choice_style: "character_choice", no_character_style: "no_character d-none"})
    }

    mouseLeave()
    {
        this.setState({character_choice_style: "character_choice d-none", no_character_style: "no_character"})
    }
}

export default character