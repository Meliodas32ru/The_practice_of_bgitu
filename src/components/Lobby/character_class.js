import React from "react";
import warrior from "../../media/images/warrior.jpg";

class CharacterClass extends React.Component
{
    render()
    {
        return (
            <div className="choice_box">
                <button className="choice_btn">{this.props.character_type}</button>
                <img className="character_img_sm" src={this.props.img}/>
            </div>
        )
    }
}

export default CharacterClass