import React from "react"
import './reg.css';

function change()
{
  return (
    alert('Registered!!')
  )
}
function reg(){
    return(
      <>
      <div>
        
        <form className="container" onsubmit="register()" >
{/* <h3>REGISTRATION FORM</h3> */}
<input type="text" name="" id="name" placeholder="Name" className="name-input" />
<input type="number" name="" id="Age" placeholder="Age" className="name-input"/>
<input type="email" name="" id="Email" placeholder="Email" className="name-input"/>
<input type="password" name="" id="pass1" placeholder="Password" className="name-input"/>
<input type="password" name="" id="pass2" placeholder="Confirm Password" className="name-input"/>
<input type="number" name="" id="Mobile Number" placeholder="Phone" className="name-input"/>
<input type="submit" onClick={(change)} value="SUBMIT" className="button-input"/> 
</form>
      </div>
      </>
    )
}
export default reg