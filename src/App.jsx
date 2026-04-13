import axios from 'axios'
import React, { useState } from 'react'

function  App() {
  const [userData,setUserData] = useState([]);
  const getData = async ()=>{
      const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100')
      setUserData(response.data);
  }
  return (
    <div className='bg-black h-screen  text-white'>
    <button onClick={getData} className='bg-green-600 rounded text-white m-4 py-2 px-2 '>Get data</button>
    </div> 
  )   
}
export default  App