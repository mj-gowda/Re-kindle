"use client"
import Link from 'next/link';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';

const BooksTable = ({ books }) => {
  const itemsPerPage = 8; // Define how many items you want per page.
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const offset = currentPage * itemsPerPage;
  const paginatedBooks = books.slice(offset, offset + itemsPerPage);


  return (
  <div>  
    <table className='w-full border-separate border-spacing-2'>
      <thead>
        <tr>
          <th className='border border-slate-600 rounded-md'>No</th>
          <th className='border border-slate-600 rounded-md'>Title</th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Author
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Publish Year
          </th>
          <th className='border border-slate-600 rounded-md'>Operations</th>
        </tr>
      </thead>
      <tbody>
        {paginatedBooks.map((book, index) => (
          <tr key={book._id} className='h-8'>
            <td className='border border-slate-700 rounded-md text-center'>
              {index + 1}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              {book.title}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.author}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.publishYear}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              <div className='flex justify-center gap-x-4'>
                <Link href={`/books/details/${book._id}`}>
                  <BsInfoCircle className='text-2xl text-green-800' />
                </Link>
                <Link href={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className='text-2xl text-yellow-600' />
                </Link>
                <Link href={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className='text-2xl text-red-600' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    <div className="flex flex-row justify-evenly">
    <ReactPaginate
      previousLabel={<button className='px-3 h-8 text-sm font-medium text-white bg-purple-500 hover:bg-purple-700 py-1 rounded-lg'>Previous</button>}
      nextLabel={<button className='px-3 h-8 text-sm font-medium text-white bg-purple-500 hover:bg-purple-700 py-1 rounded-lg'>Next</button>}
      pageCount={Math.ceil(books.length / itemsPerPage)}
      breakLabel="..."
      pageLinkClassName='bg-blue-300 hover:bg-blue-400 text-blue-800 text-xl font-semibold mr-1 px-1.5 py-0.5 rounded'
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageChange}
      containerClassName={'flex flex-row space-x-2'}
    />
    </div>
</div>
  );
};

export default BooksTable;
