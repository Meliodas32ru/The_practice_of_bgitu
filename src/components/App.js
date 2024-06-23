import React from "react";
import InputName from "./InputName";
import LobbyManagement from "./LobbyManagement";

class App extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            welcome_text: "Welcome to Dark Castle",
        }
        this.connectToLobby = this.connectToLobby.bind(this)
        this.createLobby = this.createLobby.bind(this)
    }
  render()
  {
    return (
        <>
            <div className="bg">
                <h1 className="welcome_text">{this.state.welcome_text}</h1>
                <InputName />
                <LobbyManagement createLobbyHandler={this.createLobby} connectToLobbyHandler={this.connectToLobby}/>
            </div>
        </>
    )
  }
    createLobby(e)
    {
        // Заглушка
        if(document.querySelector(`.name_input`).value === ``)
        {
            const welcome_text = this.state.welcome_text
            this.setState({welcome_text: `Please enter player name`})
            document.querySelector(`.name_input`).focus()
            setTimeout(()=>
            {
                this.setState({welcome_text: welcome_text})
            }, 1700)
        }
        else
        {
            console.log('Заглушка на создание лобби')
        }
    }
    connectToLobby(e)
    {
        console.log('Заглушка на подключение к лобби')
    }
}

export default App;
