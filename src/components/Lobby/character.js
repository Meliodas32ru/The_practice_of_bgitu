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
            selected: false,
            img: "",
            character_img_style: "character_img d-none",
        }
        this.mouseEnter = this.mouseEnter.bind(this)
        this.mouseLeave = this.mouseLeave.bind(this)
        this.warriorClick = this.warriorClick.bind(this)
        this.mageClick = this.mageClick.bind(this)
        this.archerClick = this.archerClick.bind(this)
        this.rogueClick = this.rogueClick.bind(this)
    }
    render()
    {
        return (
            <>
                <div className="character_box">
                    <div className="character" id={this.props.character_id} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                        <h2 className={this.state.no_character_style}>?</h2>
                        <div className={this.state.character_choice_style}>
                            <CharacterClass locked={this.props.queryF(1)} character_type="Warrior" img={warrior} onClick={this.warriorClick}/>
                            <CharacterClass locked={this.props.queryF(2)} character_type="Mage" img={mage} onClick={this.mageClick}/>
                            <CharacterClass locked={this.props.queryF(3)} character_type="Archer" img={archer} onClick={this.archerClick}/>
                            <CharacterClass locked={this.props.queryF(4)} character_type="Rogue" img={rogue} onClick={this.rogueClick}/>
                            <button className="not_yet_btn" onClick={this.mouseLeave}>Not yet</button>
                        </div>
                        <img src={this.state.img} className={this.state.character_img_style}/>
                    </div>
                    <input className="lobby_input" value={this.props.pers_name} placeholder="Name"/>
                </div>
            </>
        )
    }
    mouseEnter()
    {
        if(!this.state.selected)
        {
            this.setState({character_choice_style: "character_choice", no_character_style: "no_character d-none"})
        }
    }

    mouseLeave()
    {
        if(!this.state.selected)
        {
            this.setState({character_choice_style: "character_choice d-none", no_character_style: "no_character"})
        }
    }

    warriorClick()
    {
        if(!this.props.queryF(1))
        {
            this.setState({selected: true, img: warrior, character_img_style: "character_img"})
            this.setState({character_choice_style: "character_choice d-none", no_character_style: "no_character d-none"})
            this.props.change(this.props.character_id)
            this.props.lock(1)
        }
    }

    mageClick()
    {
        if(!this.props.queryF(2))
        {
            this.setState({selected: true, img: mage, character_img_style: "character_img"})
            this.setState({character_choice_style: "character_choice d-none", no_character_style: "no_character d-none"})
            this.props.lock(2)
            this.props.change(this.props.character_id)
        }
    }

    archerClick()
    {
        if(!this.props.queryF(3))
        {
            this.setState({selected: true, img: archer, character_img_style: "character_img"})
            this.setState({character_choice_style: "character_choice d-none", no_character_style: "no_character d-none"})
            this.props.lock(3)
            this.props.change(this.props.character_id)
        }
    }

    rogueClick()
    {
        if(!this.props.queryF(4))
        {
            this.setState({selected: true, img: rogue, character_img_style: "character_img"})
            this.setState({character_choice_style: "character_choice d-none", no_character_style: "no_character d-none"})
            this.props.lock(4)
            this.props.change(this.props.character_id)
        }
    }
}

export default character