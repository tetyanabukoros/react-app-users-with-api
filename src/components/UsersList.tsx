import { Box, Paper } from '@mui/material';
import React from 'react';
import { User } from '../types/User';
import { PaginationList } from './PaginationList';
import { UserCard } from './UserCard';

type Props = {
  users: User[] | undefined;
  loading: boolean;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
  handleDeleteUser: (userId: string) => void;
  handleRenameUser:  (userId: string, name: string) => void;
  handleChangeEmail:  (userId: string, email: string) => void;
  handleChangePhone:  (userId: string, phone: string) => void;
  handleChangeCity:  (userId: string, city: string) => void;
  handleChangeAdress:  (userId: string, adress: string) => void;
  handleChangeDate:  (userId: string, date: string) => void;
};

export const UsersList: React.FC<Props> = (props) => {
  const {
    users,
    loading,
    totalPosts,
    paginate,
    currentPage,
    handleDeleteUser,
    handleRenameUser,
    handleChangeEmail,
    handleChangePhone,
    handleChangeCity,
    handleChangeAdress,
    handleChangeDate
  } = props;

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
          {users?.map((user) => (
            <UserCard
              key={user.login.uuid}
              user={user}
              handleDeleteUser={handleDeleteUser}
              handleRenameUser={handleRenameUser}
              handleChangeEmail={handleChangeEmail}
              handleChangePhone={handleChangePhone}
              handleChangeCity={handleChangeCity}
              handleChangeAdress={handleChangeAdress}
              handleChangeDate={handleChangeDate}
            />
          ))}
        </Box>
      </div>
      <PaginationList
        totalPosts={totalPosts}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};
