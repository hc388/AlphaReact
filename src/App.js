import logo from './logo.svg';
import './App.css';
import HomePage from "./HomePage";
import ApiCall from './ApiCall.js'
import React, {useState} from "react";

function App() {


    const [userName, updateUser] = useState("")
    const [passWord, updatePass] = useState("")
    const [role, updateRole] = useState("")

    let userUpdater = newUser => {
        updateUser(newUser)
        console.log("USERNAME IN APP IS", userName)
    }

    let passUpdater = newPass => {
        updatePass(newPass)
        console.log("PASSWORD IN APP IS", passWord)

    }
    let roleUpdater = newRole => {
        updateRole(newRole)
        console.log("YOU ARE A ", role)
    }

    return (
        <div>
            <HomePage upUser={userUpdater} upPass={passUpdater}/>
            <ApiCall user={userName} pass={passWord} updater={roleUpdater}/>

        </div>
    );
}

export default App;
