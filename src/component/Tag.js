import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import Spinner from './Spinner';

const Tag= () => {

    const API_key = process.env.REACT_APP_GIPHY_API_KEY

    const[gif, setgif] = useState('');
    const[loading, setloading] = useState(false);
    const[tag, settag] = useState('car')

    async function fetchdata(){
      setloading(true);
    const url =  `https://api.giphy.com/v1/gifs/random?api_key=${API_key}`;

    const {data} = await axios.get(url);
    const imgsrc = data.data.image.downsized_large.url;
    console.log(imgsrc);
    setgif(imgsrc);
    setloading(false);
   

    }

    useEffect( ()=>{
        fetchdata();
        },[]);
function clickhandler(){

  fetchdata();
}

function chagehdler(event){
  settag(event.target.value);

}


  return (
    <div className='flex flex-col w-[600px] justify-center items-center
     rounded-lg bg-sky-600 border border-black h-[150px] gap-y-5 mt-[15px]'>

        <h1 className='text-md  font-bold underline mb-40'>A Random Gif</h1>

        {

          loading?(<Spinner/>):( <img src={gif}/>)
        }

        <input

        className='w-10/12 text-lg rounded-lg mb-[3px] text-center'
        onChange={chagehdler}
        
        />
       
        <button  onClick={clickhandler}
         className='bg-yellow-500 w-[500px] rounded-md text-center '>
            Create Gif
        </button>
    </div>
  )
}

export default Tag