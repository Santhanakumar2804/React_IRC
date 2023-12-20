import React from 'react'

function Edituser() {
  return (
    <>
     <form>
        <input type='text' id='username' placeholder='USERNAME'/>
        <input type='text' id='password' placeholder='PASSWORD'/>
        <button type='submit' className='submit-btn'>Save</button>
    </form>
    </>
  )
}

export default Edituser