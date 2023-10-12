"use client"
import React, { useState } from 'react';
import FindBook from './ui/FindBook';


const SearchBooks=()=>{
    const [id,setId]=useState('');
    const [show, setShow] = useState(false);

    return (
        <>
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Search by Book ID</label>
          <input
            type='text'
            value={id}
            onChange={(e) => setId(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        <div className='flex p-2 space-x-2'>
        <button
            className='bg-purple-500 hover:bg-purple-700 text-white px-4 py-1 rounded-lg gap-2'
            onClick={id ? ()=>setShow(true) : ()=>{ setShow(false); alert('enter id')} }>Search</button>
        
        <button 
            className='bg-purple-500 hover:bg-purple-700 text-white px-4 py-1 rounded-lg gap-2'
            onClick={()=> {setShow(false),setId("")}}>Clear</button>
        </div>
        </div>
        </div>
        <div>
            {show ? <FindBook id={id}/> : null}
        </div>
        </>
    );
}

export default SearchBooks;
