import "../assets/Navbar.css"
import {Link} from 'react-router-dom'
const Navbar=()=>
{
    return (
        <nav className="navbar">
      <ul>
        <Link to='/home'>
          <li>HOME</li>
        </Link>
      
        <Link to='/login'>
          <li>LOGIN</li>
        </Link>
      
        <Link to='/register'>
          <li>REGISTER</li>
        </Link>
        <Link to='/sidebar'>
          <li>DASHBOARD</li>
        </Link>
      
      </ul>
    </nav>

    )
}
export default Navbar