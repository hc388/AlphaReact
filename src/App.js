import logo from './logo.svg';
import './App.css';
import HomePage from "./HomePage";
import ApiCall from './ApiCall.js'
import User from './user'
import Admin from "./admin";
import React, {useState} from "react";
import {BrowserRouter as Router, Link, Route, Switch, Redirect} from 'react-router-dom';


function App() {


    const [userName, updateUser] = useState("")
    const [passWord, updatePass] = useState("")
    const [role, updateRole] = useState("")
    const [click, updateClick] = useState(0)

    let userUpdater = newUser => {
        updateUser(newUser)
    }

    let passUpdater = newPass => {
        updatePass(newPass)

    }
    let roleUpdater = newRole => {
        updateRole(newRole)
    }
    //let invalidMsg = <p id=\"login-error-msg\">!! Invalid username and/or password</p>
    return (
        <Router>
            <div>
                <Switch>
                    <React.Fragment>
                        <Link to="/"><button>
                            Home
                        </button>
                        </Link>
                    <Route exact path="/">
                        {role === "notfound" ? <HomePage upUser={userUpdater} upPass={passUpdater} status = {1}/> :
                            <HomePage upUser={userUpdater} upPass={passUpdater} status ={0}/> }
                        <ApiCall user={userName} pass={passWord} updater={roleUpdater}/>
                    </Route>
                    <Route  path="/user">
                        <User />
                    </Route>
                    <Route  path="/admin">
                        <Admin/>
                    </Route>

                    </React.Fragment>
                </Switch>
                {role === "user" && <Redirect to="/user" />}
                {role === "admin" && <Redirect to="/admin"/>}




            </div>
        </Router>
    );
}

export default App;
