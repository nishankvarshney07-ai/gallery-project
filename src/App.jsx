import axios from 'axios'
import React , { useEffect, useState } from 'react'

function  App() {
  const [userData,setUserData] = useState([]);
  const [index,setIndex] = useState(0);
  const getData = async ()=>{
      const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100')
      setUserData(response.data);

  }
  useEffect(()=>{
    getData();  
  },[index])

  let printuserData = <h3 className='text-gray-500 text-xs absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 font-semibold'>...loading</h3>
   if (userData.length>0){
printuserData = userData.map((elem,idx)=>{
   
  return <div key={idx}>
    <Card elem={elem} />
  </div>
})
  }
  return (
    <div className='bg-black h-screen   text-white'>
    <button onClick={getData} className='bg-green-600 rounded flex flex-wrap text-white m-4 py-2 px-2 '>Get data</button>
    </div> 
  )   
}
export default  App