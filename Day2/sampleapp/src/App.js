import './assets/Css/style.css'
import  Nav from './components/Nav'
function App(){
    return(
        <div>
            <Nav/>
            <center>HELLO WORLD!</center>
            <form class="container shadow" onsubmit="LOGIN()" >
            <h2>LOGIN</h2>
        <input type="text" name="" id="name" placeholder="User Name" class="name-input" />
        <input type="password" name="" id="pass" placeholder="Password" class="name-input" />
        <input type="submit" value="LOGIN" class ="button-input" />
        </form>
    
        </div>
    )
    }
    export default App