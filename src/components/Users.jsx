import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Custcomp from './notices/Custcomp'
const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/getUsers');
        setUsers(response.data); // Corrected: access data from response
      } catch (error) {
        console.log("Error while fetching Users: ", error.message);
      }
    };
    fetchUsers();
  }, []);

  console.log(users); 
// bg-[#3b82f6]/5
// bg-[#e8e8e8]
  return (
    <div className='bg-[#f1f1f194] h-full '>
      <Custcomp data={users}/>
    </div>
  )
}

export default Users