import React from "react";
import {Link} from "react-router-dom";

class ConnectionManagement extends React.Component
{
    render()
    {
        return(
            <>
                <div className="management">
                    <div className="lobby_conn">
                        <input name="tag" className="tag_input" placeholder="Tag"/>
                        <button onClick={this.props.connectToLobbyHandler} className="lobby_conn_btn">Connect to Lobby</button>
                    </div>
                    <button onClick={this.props.createLobbyHandler} className="create_lobby">Create Lobby</button>
                </div>
            </>
        )
    }
}

export default ConnectionManagement;