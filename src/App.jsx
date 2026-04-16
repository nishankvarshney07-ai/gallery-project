import axios from 'axios'
import React , { useEffect, useState } from 'react'
import Card from './components/Card'

function  App() {
  const [userData,setUserData] = useState([]);
  const [index,setIndex] = useState(1);
  const getData = async ()=>{
      const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
      setUserData(response.data);

   }
   useEffect(()=>{
    getData() 
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
        className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'
        onClick={()=>{
          if(index>1){
            setIndex(index-1)
            setUserData([])
          }
        }}>
        Prev
        </button>
        <h4>Page {index}</h4>
        <button className="bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold" 
        onClick={()=>{
          setIndex(index+1)
          setUserData([])

        }}
        >Next</button>
      </div>
    </div> 
  )   
}
export default  App