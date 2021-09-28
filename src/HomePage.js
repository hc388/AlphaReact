import React, {useState} from 'react'
import ApiCall from "./ApiCall";

function HomePage(props) {

    const [user, updateUser] = useState("")
    const [pass, updatePass] = useState("")

    let onUserChange = e => {
        updateUser(e.target.value)
    }
    let onPassChange = e => {
        updatePass(e.target.value)
    }


    let submitHandler = event => {
        event.preventDefault();
        props.upPass(pass)
        props.upUser(user)
        console.log("COMINGDOWNHERE")
        updateUser("")
        updatePass("")

    }
    return(
        <div className="mainContainer">
            <form style={{width: "30%"}} action="#" onSubmit={() =>  false} method="post">
                <div className="container">
                    <label><h2>LOGIN FORM</h2></label>
                    <label htmlFor="user"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="user" required onChange={onUserChange}/>i


                    <label htmlFor="pass"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="pass" required onChange={onPassChange}/>

                    <button type="submit" onClick={submitHandler} value="Login">Login</button>
                    <p id="login-error-msg">!! Invalid username and/or password</p>
                </div>

            </form>
        </div>
    )
}
export default HomePage