import React from "react";

class LobbyManagement extends React.Component
{
    render()
    {
        return(
            <>
                <div className="management">
                    <div className="lobby_conn">
                        <input name="tag" className="tag_input" placeholder="Tag"/>
                        <button onClick={this.connectToLobby} className="lobby_conn_btn">Connect to Lobby</button>
                    </div>
                    <button onClick={this.createLobby} className="create_lobby">Create Lobby</button>
                </div>
            </>
        )
    }
    createLobby(e)
    {
        // Заглушка
        if(document.querySelector(`.name_input`).value === ``)
        {
            const welcome_text = document.querySelector(`.welcome_text`)
            const text = welcome_text.innerHTML
            welcome_text.innerHTML = 'Please enter player name'
            document.querySelector(`.name_input`).focus()
            setTimeout(()=>
            {
                welcome_text.innerHTML = text
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

export default LobbyManagement;