import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import InputName from "./WelcomePage/InputName";
import ConnectionManagement from "./WelcomePage/ConnectionManagement";
import * as SignalR from "@microsoft/signalr"

const WelcomePage = (props) =>
{
    let tag;
    const hubConnection = new SignalR.HubConnectionBuilder().withUrl("http://localhost:5190/own",
        {
        skipNegotiation: true,
        transport: SignalR.HttpTransportType.WebSockets
    }).build();
    hubConnection.start().catch(err => document.write(err));

    const Navigate = useNavigate()
    let [welcomeText, setWelcomeText] = useState("Welcome to Dark Castle")

    hubConnection.on("GetPath", (value) => {
        Navigate(`/path`, {state: {value: value, tag: tag}})
    });
    
    hubConnection.on("GetFight", (value) => {
        let client = "user";
        Navigate(`/Fight`, {state: {value: value, tag: tag, client:client }})
    });
    
    hubConnection.on("GetChest", (value) => {
        Navigate(`/Chest`, {state: {value: value, tag: tag}})
    });

    hubConnection.on("GetTag", (roomName) => {
        //Жду ответа от сервера, получаю параметры и посылаю их на Navigate
        console.log('Получение room name с сервера')
        tag = roomName;
    });
    hubConnection.on("GetPlayers", (value) => {
        console.log('Получение names с сервера')
        console.log(value)
        Navigate(`/Lobby`, {state: {value: value, tag: tag}})
    });

    return (
        <>
            <div className="bg">
                <h1 className="welcome_text">{welcomeText}</h1>
                <InputName/>
                <ConnectionManagement createLobbyHandler={createLobby} connectToLobbyHandler={connectToLobby}/>
            </div>
        </>
    )

    function createLobby(e) {
        // Заглушка
        if (document.querySelector(`.name_input`).value === ``)
        {
            const welcome_text = welcomeText
            setWelcomeText(`Please enter player name`)
            document.querySelector(`.name_input`).focus()
            setTimeout(() => {
                setWelcomeText(welcome_text)
            }, 1700)
        }
        else
        {
            const nameUser = document.querySelector(`.name_input`).value
            hubConnection.invoke("Join", nameUser).catch(function (err) {
                return console.error(err.toString());
            });

            //Вызов метода SignalR. Он принимает имя, вернёт название группы и массив имён
            //Метод 1 вернёт имя. Метод 2 вернёт массив имён
        }
    }

    function connectToLobby(e)
    {
        if (document.querySelector(`.name_input`).value === ``||document.querySelector(`.tag_input`).value === ``)
        {
            const welcome_text = welcomeText
            setWelcomeText(`Please enter player name`)
            document.querySelector(`.name_input`).focus()
            setTimeout(() => {
                setWelcomeText(welcome_text)
            }, 1700)
        }
        else
        {
            const nameUser = document.querySelector(`.name_input`).value;
            const nameRoom = document.querySelector(`.tag_input`).value;

            hubConnection.invoke("Connect", nameUser, nameRoom).catch(function (err) {
                return console.error(err.toString());
            });
        }
    }
}

export default WelcomePage;