import React, {useEffect, useState} from "react";

const CharacterClass = (props) =>
{
    let [boxStyle, setBoxStyle] = useState("choice_box")
    let [btnStyle, setBtnStyle] = useState("choice_btn")
    let [imgStyle, setImgStyle] = useState("character_img_sm")

    useEffect(() =>
    {
        if(props.locked)
        {
            setBoxStyle(boxStyle + " unavailable")
            setBtnStyle(btnStyle + " unavailable")
            setImgStyle(imgStyle + " unavailable")
        }
    }, [boxStyle, btnStyle, imgStyle, props.locked])

    return (
        <div className={boxStyle}>
            <button className={btnStyle} onClick={props.onClick}>{props.character_type}</button>
            <img className={imgStyle} src={props.img} onClick={props.onClick}/>
        </div>
    )

}

export default CharacterClass