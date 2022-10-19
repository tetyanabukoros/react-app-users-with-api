import React, { useEffect, useState } from 'react';
import { User } from './types/User';
import { UsersList } from './components/UsersList';
import { FilterBlock } from './components/FilterBlock';
import { Stack, Container } from '@mui/material';

export const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
    .then((response) => response.json())
    .then((response) => setUsers(response.results))
  }, [])

  console.log(users)

  return (
    <Container maxWidth="lg">
      <Stack
        direction="row" 
        spacing={2}
        justifyContent="center"
      >
        <FilterBlock/>
        <UsersList users={users} />
      </Stack>
    </Container>
  )

}

export default App;
