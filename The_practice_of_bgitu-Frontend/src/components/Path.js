import React from "react";
import {useLocation} from "react-router-dom";
import * as SignalR from "@microsoft/signalr"

const Path = (props) =>
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
        <div className="path_bg">
            <div className="path_row">
                <button onClick={ChestBtn} className="treasure_btn">Treasure</button>
                <button onClick={FigthBtn} className="fight_btn">Fight</button>
            </div>
            <div className="score_container">
                <p className="score_text">Score</p>
                <p className="score_value" dangerouslySetInnerHTML={{ __html: value[value.length-1] }} />
            </div>
        </div>
    )
    function FigthBtn(){
        hubConnection.invoke("SetFight", tag).catch(function (err) {
            return console.error(err.toString());
        });
    }
    function ChestBtn(){
        hubConnection.invoke("SetChest", tag).catch(function (err) {
            return console.error(err.toString());
        });
    }
}

export default Path;