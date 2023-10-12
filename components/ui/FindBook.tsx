"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '@/components/ui/Spinner';


const FindBook = ({id} : String) => {
const [book, setBook] = useState({});
const [loading, setLoading] = useState(false);

useEffect(() => {
setLoading(true);
axios
    .get(`${process.env.NEXT_PUBLIC_BASE_URL}/books/${id}`)
    .then((response) => {
    setBook(response.data);
    setLoading(false);
    })
    .catch((error) => {
    console.log(error);
    alert('Incorrect ID entered')
    setLoading(true);
    });
}, []);

return (
<div className='flex items-center justify-center p-4'>
    {loading ? (
    <Spinner />
    ) : (
    <div className='flex flex-row border-2 border-sky-700 rounded-xl w-fit p-4'>
        <div className='my-8'>
        <img className="p-2 w-64 h-80 rounded-t-lg" src={book.image} alt="product image" />
        </div>
        <div className='flex flex-col p-8'>
        <div className='my-4'>
        <span className='text-xl mr-4 text-gray-500'>Id :</span>
        <span>{book._id}</span>
        </div>
        <div className='my-4'>
        <span className='text-xl mr-4 text-gray-500'>Title :</span>
        <span>{book.title}</span>
        </div>
        <div className='my-4'>
        <span className='text-xl mr-4 text-gray-500'>Author :</span>
        <span>{book.author}</span>
        </div>
        <div className='my-4'>
        <span className='text-xl mr-4 text-gray-500'>Publish Year :</span>
        <span>{book.publishYear}</span>
        </div>
        <div className='my-4'>
        <span className='text-xl mr-4 text-gray-500'>Create Time :</span>
        <span>{new Date(book.createdAt).toString()}</span>
        </div>
        <div className='my-4'>
        <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
        <span>{new Date(book.updatedAt).toString()}</span>
        </div>
        </div>
    </div>
    )}
</div>
);
};

export default FindBook;