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

  return (
    <div className='bg-[#e8e8e8] h-[100vh]'>
      <Custcomp data={users}/>
    </div>
  )
}

export default Users