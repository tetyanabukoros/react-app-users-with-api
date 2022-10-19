import { Typography } from '@mui/material';
import React from 'react';
import { User } from '../types/User';
import { UserCard } from './UserCard';

type Props = {
  users: User[];
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
        {users.map(user => (
          <UserCard
            key={user.email}
            user={user}
          />
        ))}
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
