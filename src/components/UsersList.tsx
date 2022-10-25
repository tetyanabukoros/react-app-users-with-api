import { Box, Paper } from '@mui/material';
import React from 'react';
import { User } from '../types/User';
import { PaginationList } from './PaginationList';
import { UserCard } from './UserCard';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


type Props = {
  users: User[] | undefined;
  loading: boolean;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
  handleDeleteUser: (userId: string) => void;
  handleRenameUser: (userId: string, name: string) => void;
  handleChangeEmail: (userId: string, email: string) => void;
  handleChangePhone: (userId: string, phone: string) => void;
  handleChangeCity: (userId: string, city: string) => void;
  handleChangeAdress: (userId: string, adress: string) => void;
  handleChangeDate: (userId: string, date: string) => void;
  setUsers: (value: React.SetStateAction<User[]>) => void;
  select: string;
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
    handleChangeDate,
    setUsers,
    select
  } = props;

  function handleOnDragEnd(result: any) {
    const items = Array.from(users || []);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setUsers(items)
  }

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
          {select === 'custom'
            ? (
              <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId='characters'>
                  {(provided) => (
                    <ul className="usersList__item" {...provided.droppableProps} ref={provided.innerRef}>
                      {users?.map((user, index) => {
                        return (
                          <Draggable key={user.login.uuid} draggableId={user.login.uuid} index={index}>
                            {(provided) => (
                              <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                <UserCard
                                  user={user}
                                  handleDeleteUser={handleDeleteUser}
                                  handleRenameUser={handleRenameUser}
                                  handleChangeEmail={handleChangeEmail}
                                  handleChangePhone={handleChangePhone}
                                  handleChangeCity={handleChangeCity}
                                  handleChangeAdress={handleChangeAdress}
                                  handleChangeDate={handleChangeDate}
                                />
                              </li>
                            )}
                          </Draggable>
                        )
                      })}
                      {provided.placeholder}
                    </ul>
                  )}
                </Droppable>
              </DragDropContext>
            )
            : (
              <ul className="usersList__item">
                {users?.map((user) => {
                  return (
                    <li className="usersList__item">
                      <UserCard
                        user={user}
                        handleDeleteUser={handleDeleteUser}
                        handleRenameUser={handleRenameUser}
                        handleChangeEmail={handleChangeEmail}
                        handleChangePhone={handleChangePhone}
                        handleChangeCity={handleChangeCity}
                        handleChangeAdress={handleChangeAdress}
                        handleChangeDate={handleChangeDate}
                      />
                    </li>
                  )
                })}
              </ul>
            )
          }
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
