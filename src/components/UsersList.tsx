import { Box, Paper, Typography } from '@mui/material';
import React from 'react';
import { User } from '../types/User';
import { UserCard } from './UserCard';

type Props = {
  users: User[] | undefined;
  loading: boolean;
};

export const UsersList: React.FC<Props> = ({ users, loading }) => {
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
      <Box sx={{ minWidth: "650px" }}>
        {!users?.length && (
          <Paper sx={{
            p: "50px",
            textAlign: "center",
            fontFamily: 'Work Sans',
            fontWeight: "700"
          }}>
            {loading
              ? <p>Loading...</p>
              : <h2 className="userInfo">There are no users with this request</h2>
            }
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
