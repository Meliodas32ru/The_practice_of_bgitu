import React from "react";
import warrior from "../media/images/warrior.jpg"
import mage from "../media/images/mage.jfif"
import archer from "../media/images/archer.jpg"
import rogue from "../media/images/assasin.jpg"
import FightCharacter from "./Fight/FightCharacter";
import {useLocation} from "react-router-dom";
import * as SignalR from "@microsoft/signalr"

const Chest = (props) =>
{
    const hubConnection = new SignalR.HubConnectionBuilder().withUrl("http://localhost:5190/own",
    {
        skipNegotiation: true,
        transport: SignalR.HttpTransportType.WebSockets
    }).build();
    
    hubConnection.start().catch(err => document.write(err));
    
    const Data = useLocation();
    const value = Data.state.value
    const tag = Data.state.tag

    return(
        <div className="chest_bg">
            <div className="fight_row fight_row_up_padding">
                <FightCharacter img={warrior} name={value.length >0?value[0].userName : "None"} health={"20/20"} padding={"pl-15"}/>
                <div className="info_block">
                    <p className="points_info">+500 pts</p>
                    <button onClick={ChestBtn} className="continue_game">Continue</button>
                </div>
                <FightCharacter img={mage} name={value.length >1?value[1].userName : "None"} health={"20/20"} padding={"pr-15"}/>
            </div>
            <div className="fight_row fight_row_down_padding">
                <FightCharacter img={archer} name={value.length >2?value[2].userName : "None"} health={"20/20"} padding={"pl-15"}/>
                <FightCharacter img={rogue} name={value.length >3?value[3].userName : "None"} health={"20/20"} padding={"pr-15"}/>
            </div>
            <div className="score_container">
                <p className="score_text">Score</p>
                <p className="score_value" dangerouslySetInnerHTML={{ __html: value[value.length-1] }} />
            </div>
        </div>
    )
    
    function ChestBtn(){
        hubConnection.invoke("AddScore", 500, tag).catch(function (err) {
            return console.error(err.toString());
        });
    }
}

export default Chest