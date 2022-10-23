import { Button, Paper, Stack } from '@mui/material';
import React, { useContext } from 'react';
import { User } from '../types/User';
import './../styles/App.scss';
import { AppContext } from './AppContext';
import { EditModal } from './EditModal';

type Props = {
  user: User;
  handleDeleteUser: (selectedUserEmail: string) => void;
};

export const getBirthdayFormat = (data: string) => {
  const day = data.slice(8, 10);
  const monthNumber = data.slice(5, 7)
  let month = ''
  switch (monthNumber) {
    case "01":
      month = 'January';
      break;
    case "02":
      month = 'February';
      break;
    case "03":
      month = 'March';
      break;
    case "04":
      month = 'April';
      break;
    case "05":
      month = 'May';
      break;
    case "06":
      month = 'June';
      break;
    case "07":
      month = 'July';
      break;
    case "08":
      month = 'August';
      break;
    case "09":
      month = 'September';
      break;
    case "10":
      month = 'October';
      break;
    case "11":
      month = 'November';
      break;
    case "12":
      month = 'December';
      break;
    default:
      month = 'April';
  }
  const year = data.slice(0, 4)
  return `${day} ${month} ${year}`
}

export const UserCard: React.FC<Props> = ({ user, handleDeleteUser }) => {
  const { setSelectedUserEmail } = useContext(AppContext);
  const [openEditForm, setOpenEditForm] = React.useState(false);
  const handleOpenEditForm = () => setOpenEditForm(true);
  const handleCloseEditForm = () => setOpenEditForm(false);
  const { street, city } = user.location;
  const { first, last } = user.name;

  return (
    <Paper sx={{ p: "24px", mb: "8px", borderRadius: "12px" }}>
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
              <h2 className="usersList__name">{first} {last}</h2>
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
        />
      </div>
    </Paper>
  );
};