import React from 'react'

function Adduser() {
  return (
    <>
    <form>
        <input type='text' id='username' placeholder='USERNAME'/>
        <input type='text' id='password' placeholder='PASSWORD'/>
        <button type='submit' className='submit-btn'>Add</button>

    </form>
    </>
  )
}

export default Adduser