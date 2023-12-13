import React from 'react';
import './login.css'

function change()
{
    return(
        alert("Login successfull!!")
    )
   
}
function Login (){
    return(
    <>
        <div className="container1"> 
            <center>LOGIN</center>
            <form className="container1" onsubmit="LOGIN()" >
        <input type="text" name="" id="name" placeholder="User Name" className="name-input1"/>
    <input type="password" name="" id="pass" placeholder="Password" className="name-input1"/>
    <input type="submit" onClick={(change)} value="LOGIN" className ="button-input"/>
    </form>
        </div>
    </>
   
    )
}
export default Login