import { Box, Button, Paper, Stack } from '@mui/material';
import React from 'react';
import { User } from '../types/User';
import './../styles/App.css';
type Props = {
  user: User,
};

const getBirthdayFormat = (data: string) => {
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
      month = 'Augus';
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

export const UserCard: React.FC<Props> = ({ user }) => {
  return (
    <Paper className="userCard" sx={{ p: "24px", mb: "8px" }}>
      <div>
      {/* <CardMedia
        component="img"
        // height="140"
        image={user?.picture.medium}
        alt={`${user.name.first} ${user.name.last}`}
      /> */}
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" alignItems="center" spacing={2}>
          <div>
            <img
              className="userImage"
              src={user?.picture.large}
              alt={`${user.name.first} ${user.name.last}`}
            />
          </div>

          <Stack direction="column" justifyContent="space-between">
            <h2 className="userName">{user.name.first} {user.name.last}</h2>
            <p className="userBirth">{getBirthdayFormat(user.dob.date)}</p>
            <p className="userInfo">{user.location.city}, {user.location.street.name} {user.location.street.number}</p>
            <p className="userInfo">{user.email}</p>
          </Stack>
        </Stack>
        <Button
          style={{
            backgroundColor: "#52228C",
            fontFamily: 'Poppins',
            textTransform: 'none',
            padding: "12px 57px",
            height: "48px",
            alignSelf: "end"
          }}
          // className="editButton"
          variant="contained"
        >
          Edit
        </Button>
      </Stack>

      </div>
    </Paper>
  );
};