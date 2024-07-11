import React, { useState} from "react";
import Character from "./Lobby/character";
import {useLocation} from "react-router-dom";
import * as SignalR from "@microsoft/signalr"

const Lobby = (props) =>
{
    const hubConnection = new SignalR.HubConnectionBuilder().withUrl("http://localhost:5190/own",
    {
        skipNegotiation: true,
        transport: SignalR.HttpTransportType.WebSockets
    }).build();
    
    hubConnection.start().catch(err => document.write(err));

    let [id_1, setID_1] = useState(false)
    let [id_2, setID_2] = useState(false)
    let [id_3, setID_3] = useState(false)
    let [id_4, setID_4] = useState(false)
    let [startGameStyle, setStartGameStyle] = useState("start_game inactive")
    let [warriorLocked, setWarriorLocked] = useState(false)
    let [mageLocked, setMageLocked] = useState(false)
    let [archerLocked, setArcherLocked] = useState(false)
    let [rogueLocked, setRogueLocked] = useState(false)

    const Data = useLocation();
    const value = Data.state.value
    const tag = Data.state.tag

    return(
        <>
            <div className="lobby_bg">
                <div className="characters_block">
                    <Character lock={lockPersType} pers_name = {value.length > 0?value[0].userName : "None" } queryF={queryLocked} character_id={"id_1"} change={changeState}/>
                    <Character lock={lockPersType} pers_name = {value.length > 1?value[1].userName : "None" } queryF={queryLocked} character_id={"id_2"} change={changeState}/>
                    <Character lock={lockPersType} pers_name = {value.length > 2?value[2].userName : "None" } queryF={queryLocked} character_id={"id_3"} change={changeState}/>
                    <Character lock={lockPersType} pers_name = {value.length > 3?value[3].userName : "None" } queryF={queryLocked} character_id={"id_4"} change={changeState}/>
                </div>
                <div className="lobby_footer">
                    <input className="tag_input" value={tag} placeholder="Tag" readOnly={true}/>
                    <button onClick={StartGame} className={startGameStyle}>Start the Game</button>
                </div>
            </div>
        </>
    )

    function StartGame(){
        hubConnection.invoke("StartGame", tag).catch(function (err) {
            return console.error(err.toString());
        });
    }

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