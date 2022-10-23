import { Box, Paper, Typography } from '@mui/material';
import React, { Dispatch, SetStateAction } from 'react';
import { User } from '../types/User';
import { PaginationList } from './PaginationList';
import { UserCard } from './UserCard';

type Props = {
  users: User[] | undefined;
  loading: boolean;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  handleDeleteUser: (selectedUserEmail: string) => void;
};

export const UsersList: React.FC<Props> = (props) => {
  const { users, loading, totalPosts, paginate, page, setPage, handleDeleteUser } = props;

  return (
    <div>
      <h2 className='usersList__title'>
        List of users
      </h2>
      <div className="usersList__container">
        <Box sx={{ minWidth: "650px" }}>
          {!users?.length && (
            <Paper sx={{
              p: "50px",
              textAlign: "center",
              fontFamily: 'Work Sans',
              fontWeight: "700",
              borderRadius: "12px" 
            }}>
              {loading
                ? <p>Loading...</p>
                : <h2 className="usersList__info">There are no users with this request</h2>
              }
            </Paper>
          )}
          {users?.map(user => (
            <UserCard
              key={user.email}
              user={user}
              handleDeleteUser={handleDeleteUser}
            />
          ))}
        </Box>
      </div>
      <PaginationList
        totalPosts={totalPosts}
        paginate={paginate}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};
