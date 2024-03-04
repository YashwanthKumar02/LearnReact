import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img className='rounded-full shadow-2xl' src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    let errorCaught = false
    try {
        const response = await fetch('https://api.github.com/users/YashwanthKumar02')
        return response.json()
    } catch (error) {
        errorCaught = true
        console.log(error)
    }
    finally{
        console.log(!errorCaught?'user data from github has been fetched successfully!!':'user data not found!');
    }
}