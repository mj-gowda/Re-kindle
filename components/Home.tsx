"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '@/components/ui/Spinner';
import Link from 'next/link';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksTable from '@/components/ui/BooksTable';
import BooksCard from '@/components/ui/BooksCard';


const Home = () => {
const [books, setBooks] = useState([]);
const [loading, setLoading] = useState(false);
const [showType, setShowType] = useState('card');

useEffect(() => {
setLoading(true);
//alert(process.env.NEXT_PUBLIC_BASE_URL);
axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/books`)
    .then((response) => {
    setBooks(response.data.data);
    setLoading(false);
    })
    .catch((error) => {
    console.log(error);
    setLoading(false);
    });
}, []);

return (
<div className='p-4'>
    <div className='flex justify-center items-center gap-x-4'>
    <button
        className='bg-purple-500 hover:bg-purple-700 text-white px-4 py-1 rounded-lg'
        onClick={() => setShowType('table')}
    >
        Table
    </button>
    <button
        className='bg-purple-500 hover:bg-purple-700 text-white px-4 py-1 rounded-lg'
        onClick={() => setShowType('card')}
    >
        Card
    </button>
    </div>
    <div className='flex justify-end items-center'>
    <Link href='/books/create'>
        <h1 className='bg-purple-500 hover:bg-purple-700 text-white px-4 py-1 rounded-lg'>Add Book</h1>
    </Link>
    <Link href='/books/create'>
        <MdOutlineAddBox className='text-sky-800 hover:text-blue-700 text-4xl' />
    </Link>
    </div>
    {loading ? (
    <Spinner />
    ) : showType === 'card' ? (
    <BooksCard books={books} />
    ) : (
    <BooksTable books={books} />
    )}
    
</div>
);
};

export default Home;
