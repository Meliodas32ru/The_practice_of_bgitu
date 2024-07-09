import React, {useState} from "react";
import Character from "./Lobby/character";
import {useLocation} from "react-router-dom";


const Lobby = (props) =>
{
    let [id_1, setID_1] = useState(false)
    let [id_2, setID_2] = useState(false)
    let [id_3, setID_3] = useState(false)
    let [id_4, setID_4] = useState(false)
    let [startGameStyle, setStartGameStyle] = useState("start_game inactive")
    let [warriorLocked, setWarriorLocked] = useState(false)
    let [mageLocked, setMageLocked] = useState(false)
    let [archerLocked, setArcherLocked] = useState(false)
    let [rogueLocked, setRogueLocked] = useState(false)

    // const Data = useLocation();
    // const name = Data.state.name
    // const tag = Data.state.tag
    return(
        <>
            <div className="lobby_bg">
                <div className="characters_block">
                    <Character lock={lockPersType} queryF={queryLocked} character_id={"id_1"} change={changeState}/>
                    <Character lock={lockPersType} queryF={queryLocked} character_id={"id_2"} change={changeState}/>
                    <Character lock={lockPersType} queryF={queryLocked} character_id={"id_3"} change={changeState}/>
                    <Character lock={lockPersType} queryF={queryLocked} character_id={"id_4"} change={changeState}/>
                </div>
                <div className="lobby_footer">
                    <input className="tag_input" value="Tag" placeholder="Tag" readOnly={true}/>
                    <button className={startGameStyle}>Start the Game</button>
                </div>
            </div>
        </>
    )

    function changeState(idx)//Эта функция даёт понять, выбрал ли игрок всех 4-х персов?
    {
        if(idx === "id_1")
        {
            setID_1(true)
        }

        if(idx === "id_2")
        {
            setID_2(true)
        }

        if(idx === "id_3")
        {
            setID_3(true)
        }

        if(idx === "id_4")
        {
            setID_4(true)
        }
        let selected = 0;
        let check = [id_1, id_2, id_3, id_4]
        check.forEach((elem) =>
        {
            selected += Number(elem)
        })
        if(selected === 3)
        {
            setStartGameStyle("start_game")
        }
    }

    function lockPersType(ident)//Блокируем определённый тип перса
    {
        switch (ident)
        {
            case 1: setWarriorLocked(true); break;
            case 2: setMageLocked(true); break;
            case 3: setArcherLocked(true); break;
            case 4: setRogueLocked(true); break;
        }
    }

    function queryLocked(ident)//Заблокирован ли данный тип перса или нет?
    {
        switch (ident)
        {
            case 1: return warriorLocked
            case 2: return mageLocked
            case 3: return archerLocked
            case 4: return rogueLocked
            default: return NaN
        }
    }
}

export default Lobby