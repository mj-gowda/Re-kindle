"use client"

import Link from 'next/link';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import BookModal from './BookModal';

const BookSingleCard = ({ book }) => {
const [showModal, setShowModal] = useState(false);

return (
<div className='border-2 bg-gray-300 rounded-lg px-4 py-3 m-4 relative hover:shadow-xl'>
    <h2 className='absolute hrefp-1 right-2 px-4 py-1 bg-red-300 rounded-lg'>
    {book.publishYear}
    </h2>
    <img className="p-2 w-64 h-80 rounded-t-lg" src={book.image} alt="product image" />
    <div className='flex justify-start items-center gap-x-2'>
    <PiBookOpenTextLight className='text-blue-800 text-2xl' />
    <h2 className='my-1'>{book.title}</h2>
    </div>
    <div className='flex justify-between items-center gap-x-2 mt-2 p-2'>
    <BiShow
        className='text-3xl text-blue-800 hover:text-black cursor-pointer'
        onClick={() => setShowModal(true)}
    />
    <Link href={`/books/details/${book._id}`}>
        <BsInfoCircle className='text-2xl text-green-800 hover:text-black' />
    </Link>
    <Link href={`/books/edit/${book._id}`}>
        <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
    </Link>
    <Link href={`/books/delete/${book._id}`}>
        <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
    </Link>
    </div>
    {showModal && (
    <BookModal book={book} onClose={() => setShowModal(false)} />
    )}
</div>
);
};

export default BookSingleCard;
