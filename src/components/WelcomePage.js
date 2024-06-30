import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import InputName from "./WelcomePage/InputName";
import ConnectionManagement from "./WelcomePage/ConnectionManagement";

const WelcomePage = (props) =>
{
    const Navigate = useNavigate()
    let [welcomeText, setWelcomeText] = useState("Welcome to Dark Castle")

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
            const name = document.querySelector(`.name_input`).value
            Navigate(`/Lobby`, {state: {name: name, tag: randomNumber(10000, 99999)}})
        }
    }
    function connectToLobby(e)
    {
        console.log('Заглушка на подключение к лобби')
    }

    function randomNumber(min, max)
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}

export default WelcomePage;
