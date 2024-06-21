import React from "react";
import InputName from "./InputName";
import LobbyManagement from "./LobbyManagement";

class App extends React.Component
{
  render()
  {
    return (
        <>
            <div className="bg">
                <h1 className="welcome_text">Welcome to Dark Castle</h1>
                <InputName />
                <LobbyManagement />
            </div>
        </>
    )
  }
}

export default App;
