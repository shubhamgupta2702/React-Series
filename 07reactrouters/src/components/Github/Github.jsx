import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
  // const [data , setData] = useState([])
  // useEffect(() =>{
  //   fetch('https://api.github.com/users/shubhamgupta2702')
  //   .then(res => res.json())
  //   .then(data =>{
  //     console.log(data);
  //     setData(data)
      
  //   })
  // }, [])
  return (
    <>
    <div className='text-center bg-gray-800 text-white m-4 text-4xl p-3'>
      Github Followers: {data.followers}
    </div>
    <img className='text-center bg-gray-800 text-white m-4 text-4xl p-6' src={data.avatar_url}/>
    
  </>
  )
}

export default Github

export const githubLoader = async () => {
 const res = await fetch('https://api.github.com/users/shubhamgupta2702')
 return res.json()

}