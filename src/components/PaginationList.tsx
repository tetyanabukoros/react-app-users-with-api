import { Stack } from '@mui/material';
import React, { useContext } from 'react';
import { AppContext } from './AppContext';

type Props = {
  totalPosts: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
};

export const PaginationList: React.FC<Props> = ({
  totalPosts,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  const { postsPerPage, setPostsPerPage } = useContext(AppContext);
  const lastPage = totalPosts / +postsPerPage;

  for (let i = 1; i <= Math.ceil(totalPosts / +postsPerPage) - 1; i++) {
    if (pageNumbers.length < 5) {
      pageNumbers.push(i);
    }
  }

  return (
    <nav>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="baseline"
      >
        <ul className='paginationList'>
          <li className='paginationList__item paginationList__item '>
            <button 
              disabled={currentPage === 1}
              onClick={() => {
                paginate(currentPage - 1);
              }}
              className='paginationList__button paginationList__button-nav'
            >
              {'< Back'}
            </button>
          </li>
          {pageNumbers.map(number => (
            <li className='paginationList__item' key={number}>
              <button
                className={`paginationList__button ${currentPage === number 
                  ? 'paginationList__button-active' 
                  : ''}`}
                onClick={() => {
                  paginate(number);
                }}
              >
                {number}
              </button>
            </li>
          ))}
          {pageNumbers.length >= 5 && (
            <li className='paginationList__item'>
              <button
                className='paginationList__button paginationList__button-decor'
              >
                ...
              </button>
            </li>
          )}
          <li className='paginationList__item'>
            <button
              className={`paginationList__button ${currentPage === lastPage 
                ? 'paginationList__button-active' 
                : ''}`}
              onClick={() => {
                paginate(lastPage);
              }}
            >
              {lastPage}
            </button>
          </li>
          <li className='paginationList__item'>
            <button
              disabled={totalPosts / +postsPerPage === currentPage}
              onClick={() => {
                paginate(currentPage + 1);
              }}
              className='paginationList__button paginationList__button-nav'
            >
              {'Next page >'}
            </button>
          </li>
        </ul>
        <select
          defaultValue={'50'}
          id='select-posts-per-psge'
          className="paginationList__select"
          value={postsPerPage}
          onChange={(event) => {
            setPostsPerPage(event.target.value);
            paginate(1);
          }}
        >
          <option value={'10'} className="paginationList__option">10</option>
          <option value={'50'} className="paginationList__option">50</option>
          <option value={'100'} className="paginationList__option">100</option>
          <option value={'500'} className="paginationList__option">All</option>
        </select>
      </Stack>
    </nav>
  )
}