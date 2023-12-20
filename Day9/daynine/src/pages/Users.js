import {useState,useEffect} from 'react'
import '../assets/css/core.css';
import { getUser } from '../services/api';
function Users() {
    
    const[user,setUser]=useState([])
    const fetchData =async()=>{
        try{
        const res= await getUser()
       
        setUser(res.data)
        }
        catch(e){
           console.log(e)
        }
    }
    // console.log(user)
    useEffect(()=>{
        fetchData()
    },[])
  return (
      <>
      <table>
        <thead>
            <tr>
                <th>
                    Username
                </th>
                <th>
                    Password
                </th>
                <th>
                    Edit
                </th>
                <th>
                    Delete
                </th>
            </tr>
        </thead>
        <tbody>
            {
                user.map((use)=>(
            <tr key={use.id}>
                <td>{use.username}</td>
                <td>{use.password}</td>
                {/* <td>Max789</td>
                <td>Max123</td>
                <td>Max456</td> */}
                <td>
                    <button>
                        <div className='edi-btn'>
                        Edit
                        </div>
                        </button>
                </td>
                <td>
           <button>
            <div className='del-btn'> 
             Delete
            </div>
             </button>
                </td>
            </tr>
                ))
            }
        </tbody>
      </table>
      </>
  );
}

export default Users