import React from 'react';

type Props = {
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void
};


export const Pagination: React.FC<Props> = ({ 
  postsPerPage, 
  totalPosts,
  paginate
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumbers.map(number => (
          <li key={number}>
            <button 
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}