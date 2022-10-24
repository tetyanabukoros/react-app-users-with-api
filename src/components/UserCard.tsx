import { Button, Stack } from '@mui/material';
import React, { useContext } from 'react';
import { User } from '../types/User';
import './../styles/App.scss';
import { AppContext } from './AppContext';
import { EditModal } from './EditModal';
import { getBirthdayFormat } from './functionHelper/getBirthdayFormat';

type Props = {
  user: User;
  handleDeleteUser: (selectedUserEmail: string) => void;
  handleRenameUser:  (userEmail: string, name: string) => void;
};

export const UserCard: React.FC<Props> = (props) => {
  const { 
    user, 
    handleDeleteUser,
    handleRenameUser,
  } = props;

  const { setSelectedUserEmail } = useContext(AppContext);
  const [openEditForm, setOpenEditForm] = React.useState(false);
  const handleOpenEditForm = () => setOpenEditForm(true);
  const handleCloseEditForm = () => setOpenEditForm(false);
  const { street, city } = user.location;
  const { first, last } = user.name;

  return (
    <div
      className={`userCard ${false ? 'userCard-grab' : ''}`}
    >
      <div>
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" alignItems="center" spacing={2}>
            <div>
              <img
                className="usersList__image"
                src={user?.picture.large}
                alt={`${first} ${last}`}
              />
            </div>

            <Stack direction="column" justifyContent="space-between">
              <h2 className="usersList__name">{user.name.fullname}</h2>
              <p className="usersList__birth">{getBirthdayFormat(user.dob.date)}</p>
              <p className="usersList__info">{city}, {street.name} {street.number}</p>
              <p className="usersList__info">{user.email}</p>
            </Stack>
          </Stack>
          <Button
            style={{
              backgroundColor: "#52228C",
              fontFamily: 'Poppins',
              textTransform: 'none',
              padding: "12px 57px",
              height: "48px",
              fontSize: "16px",
              alignSelf: "end",
              borderRadius: "12px"
            }}
            variant="contained"
            onClick={() => {
              setSelectedUserEmail(user.email);
              handleOpenEditForm();
            }}
          >
            Edit
          </Button>
        </Stack>
      </div>
      <div>
        <EditModal
          openEditForm={openEditForm}
          handleCloseEditForm={handleCloseEditForm}
          user={user}
          handleDeleteUser={handleDeleteUser}
          handleRenameUser={handleRenameUser}
        />
      </div>
    </div>
  );
};