import { Box, Paper, Typography } from '@mui/material';
import React from 'react';
import { User } from '../types/User';
import { UserCard } from './UserCard';

type Props = {
  users: User[] | undefined;
};

export const UsersList: React.FC<Props> = ({ users }) => {
  return (
    <div>
      <Typography
        style={{
          fontFamily: 'Work Sans',
          fontWeight: "700",
          fontSize: "34px",
          lineHeight: "40px",
          color: "#121212",
          margin: "32px 0"
        }}
      >
        List of users
      </Typography>
      <Box sx={{minWidth: "650px"}}>
        {!users?.length && (
          <Paper sx={{ p: "50px", textAlign: "center"}}>
            <h2 className="userInfo">There are no users with this request</h2>
          </Paper>
        )}
        {users?.map(user => (
          <UserCard
            key={user.email}
            user={user}
          />
        ))}
      </Box>
    </div>
  );
};

// font-family: 'Work Sans';
// font-style: normal;
// font-weight: 700;
// font-size: 34px;
// line-height: 40px;
// letter-spacing: -0.02em;
// color: #121212;
