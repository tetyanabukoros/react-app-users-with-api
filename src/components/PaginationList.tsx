import React, { ChangeEvent, useState } from 'react';

type Props = {
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void
};

export const PaginationList: React.FC<Props> = ({ 
  postsPerPage, 
  totalPosts,
  paginate
}) => {
  const [page, setPage] = useState<number>(1)
  const pageNumbers = [];

  const [postsPerPage1, setPostsPerPage1] = useState('50');

  const handleChangePostsPerPage = (event: ChangeEvent<HTMLSelectElement>) => {
    setPostsPerPage1(event.target.value);
  };

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='paginationList'>
      <li className='paginationItem'>
        <button 
          disabled={page === 1}
          onClick={() => {
            setPage(prev => prev - 1)
            paginate(page);
          }}
          className='paginationButton'
        >
           {'< Back'}
          </button>
        </li>
        {pageNumbers.map(number => (
          <li className='paginationItem' key={number}>
            <button 
              className={`paginationButton ${page === number ? 'activePage' : ''}`}
              onClick={() => {
                paginate(number);
                setPage(number);
              }}
            >
              {number}
            </button>
          </li>
        ))}
        <li className='paginationItem'>
          <button 
            disabled={totalPosts / postsPerPage === page}
            onClick={() => {
              setPage(prev => prev + 1)
              paginate(page);
            }}
            className='paginationButton'
          >
           {'Next page >'}
          </button>
        </li>
        <select 
          defaultValue={'50'} 
          id='select-posts-per-psge'
          className="paginationSelect"
          value={postsPerPage1}
          onChange={(event) => handleChangePostsPerPage(event)}
        >
          <option value={'10'} className="paginationOption">10</option>
          <option value={'50'} className="paginationOption">50</option>
          <option value={'100'} className="paginationOption">100</option>
          <option value={'all'} className="paginationOption">All</option>
        </select>
      </ul>
    </nav>
  )
}