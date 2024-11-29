import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';

const Random = () => {

    const API_key = process.env.REACT_APP_GIPHY_API_KEY

    const[gif, setgif] = useState('');

    async function fetchdata(){
    const url =  `https://api.giphy.com/v1/gifs/random?api_key=${API_key}`;

    const output = await axios.get(url);
    console.log(output);


    }

    useEffect( ()=>{
        fetchdata();
        })



  return (
    <div className='flex flex-col w-[600px] h-[230px] justify-center items-center
     rounded-lg bg-green-500 border border-black'>

        <h1 className='text-md  font-bold underline mb-40'>A Random Gif</h1>
        <img src={gif}/>
        <button className='bg-yellow-500 w-[500px] rounded-md text-center '>
            Create Gif
        </button>
    </div>
  )
}

export default Random