import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import InputName from "./WelcomePage/InputName";
import ConnectionManagement from "./WelcomePage/ConnectionManagement";
import * as SignalR from "@microsoft/signalr"

const WelcomePage = (props) =>
{
    const hubConnection = new SignalR.HubConnectionBuilder().withUrl("http://localhost:5190/chat",
        {
        skipNegotiation: true,
        transport: SignalR.HttpTransportType.WebSockets
    }).build();
    hubConnection.start().then(() => {
        console.log('Подключение к серверу')
    }).catch(err => document.write(err));

    const Navigate = useNavigate()
    let [welcomeText, setWelcomeText] = useState("Welcome to Dark Castle")

    hubConnection.on("GetTag", (roomName) => {
        //Жду ответа от сервера, получаю параметры и посылаю их на Navigate
        console.log('Получение ответа с сервера')
        const name = document.querySelector(`.name_input`).value
        Navigate(`/Lobby`, {state: {name: name, tag: roomName}})
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
            hubConnection.invoke("Join", nameUser).then(() =>
            {
                console.log('Отправка сообщения на сервер')
            }).catch(function (err) {
                return console.error(err.toString());
            });

            //Вызов метода SignalR. Он принимает имя, вернёт название группы и массив имён
            //Метод 1 вернёт имя. Метод 2 вернёт массив имён
        }
    }

    function connectToLobby(e)
    {
        console.log(`Заглушка на подключение к лобби`)
    }
}

export default WelcomePage;
