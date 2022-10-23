import { Stack } from '@mui/material';
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
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="baseline"
      >
        <ul className='paginationList'>
          <li className='paginationList__item'>
            <button
              disabled={page === 1}
              onClick={() => {
                setPage((prev) => prev - 1)
                paginate(page);
              }}
              className='paginationList__button'
            >
              {'< Back'}
            </button>
          </li>
          {pageNumbers.map(number => (
            <li className='paginationList__item' key={number}>
              <button
                className={`paginationList__button ${page === number ? 'paginationList__button-active' : ''}`}
                onClick={() => {
                  paginate(number);
                  setPage(number);
                }}
              >
                {number}
              </button>
            </li>
          ))}
          <li className='paginationList__item'>
            <button
              disabled={totalPosts / +postsPerPage === page}
              onClick={() => {
                setPage(prev => prev + 1)
                paginate(page);
              }}
              className='paginationList__button'
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