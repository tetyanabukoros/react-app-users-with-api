import React, { useContext, Dispatch, SetStateAction } from 'react';
import { AppContext } from './AppContext';

type Props = {
  totalPosts: number;
  paginate: (pageNumber: number) => void;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};

export const PaginationList: React.FC<Props> = ({ 
  totalPosts,
  paginate,
  page,
  setPage
}) => {
  const pageNumbers = [];

  const { postsPerPage, setPostsPerPage } = useContext(AppContext);

  for (let i = 1; i <= Math.ceil(totalPosts / +postsPerPage); i++) {
     if (pageNumbers.length < 10) {
      pageNumbers.push(i);
    }
  }

  return (
    <nav>
      <ul className='paginationList'>
      <li className='paginationItem'>
        <button 
          disabled={page === 1}
          onClick={() => {
            setPage((prev) => prev - 1)
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
            disabled={totalPosts / +postsPerPage === page}
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
          value={postsPerPage}
          onChange={(event) => {
            setPostsPerPage(event.target.value);
            paginate(1);
          }}
        >
          <option value={'10'} className="paginationOption">10</option>
          <option value={'50'} className="paginationOption">50</option>
          <option value={'100'} className="paginationOption">100</option>
          <option value={'500'} className="paginationOption">All</option>
        </select>
      </ul>
    </nav>
  )
}