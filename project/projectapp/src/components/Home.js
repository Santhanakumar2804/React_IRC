import React from "react"
import './Home.css'
import {Link} from "react-router-dom";
import Nav from "./Nav";
// import Img1 from './Badminton.jpeg'
   function Home()
   {
     return(
         <nav className="navbar">
            <Nav/>
        <h1 clss="logo"></h1>
        <ul>
            <div classNameName="background">

<base href="#"></base>
<div className="flip-3d">
<figure>
<img src="https://th.bing.com/th/id/OIP.bYh6K-MhcvsCYAeICrYtlAHaEo?w=235&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt></img>
<figcaption>FOOTBALL</figcaption>
</figure>
</div>
<div className="flip-3d">
<figure>
<img src="https://th.bing.com/th?id=OIP.0teqvh4Db5cg-wO072dpbgHaFk&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt></img>
<figcaption>CRICKET</figcaption>
</figure>
</div>
<div className="flip-3d">
<figure>
<img src="https://th.bing.com/th/id/OIP.NO-bokNGeyrWTuTrYraKiAHaE8?w=254&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt></img>
<figcaption>BADMINTON</figcaption>
</figure>
</div>
</div>
        </ul>
    </nav>
     )
}
export default Home
