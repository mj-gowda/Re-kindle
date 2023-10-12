"use client"
import BookSingleCard from './BookSingleCard';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';

const BooksCard = ({ books }) => {
  const itemsPerPage = 8; // Define how many items you want per page.
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const offset = currentPage * itemsPerPage;
  const paginatedBooks = books.slice(offset, offset + itemsPerPage);


  return (
  <div> 
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {paginatedBooks.map((item) => (
        <BookSingleCard key={item._id} book={item} />
      ))}
    </div>

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

export default BooksCard;
