import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import InputName from "./WelcomePage/InputName";
import ConnectionManagement from "./WelcomePage/ConnectionManagement";
import * as SignalR from "@microsoft/signalr"

const WelcomePage = (props) =>
{
    const hubConnection = new SignalR.HubConnectionBuilder().withUrl("/chat").build();
    const Navigate = useNavigate()
    let [welcomeText, setWelcomeText] = useState("Welcome to Dark Castle")
    hubConnection.on("GetTag", (Tag)=>{
        //Жду ответа от сервера, получаю параметры и посылаю их на Navigate
        const name = document.querySelector(`.name_input`).value
        Navigate(`/Lobby`, {state: {name: name, tag: Tag}})
    });

    return (
        <>
            <div className="bg">
                <h1 className="welcome_text">{welcomeText}</h1>
                <InputName />
                <ConnectionManagement createLobbyHandler={createLobby} connectToLobbyHandler={connectToLobby}/>
            </div>
        </>
    )

    function createLobby(e)
    {
        // Заглушка
        if(document.querySelector(`.name_input`).value === ``)
        {
            const welcome_text = welcomeText
            setWelcomeText(`Please enter player name`)
            document.querySelector(`.name_input`).focus()
            setTimeout(()=>
            {
                setWelcomeText(welcome_text)
            }, 1700)
        }
        else
        {
            console.log('Заглушка на создание лобби')
            const clientName = document.querySelector(`.name_input`).value
            hubConnection.invoke("Join", clientName).catch(function (err)
            {
                return console.error(err.toString());
            });

            //Вызов метода SignalR. Он принимает имя, вернёт название группы и массив имён
            //Метод 1 вернёт имя. Метод 2 вернёт массив имён
        }
    }
    function connectToLobby(e)
    {
        //Передаём name и tag
        console.log('Заглушка на подключение к лобби')
    }
}

export default WelcomePage;
