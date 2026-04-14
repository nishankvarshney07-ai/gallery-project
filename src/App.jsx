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
    <div className='bg-black h-screen  p-4 overflow-auto text-white'>
      <div className='flex h-[82%] flex-wrap gap-4 p-2'>
        {printuserData}
      </div>

      <div className='flex justify-center gap-6 items-center p-4 '>
        <button style={{opacity:index==1?0.6:1}} 
        onClick={()=>{
          if(index>1){
            setIndex(index-1)
            setUserData([])
          }
        }}>
        Prev
        </button>
      </div>
    </div> 
  )   
}
export default  App