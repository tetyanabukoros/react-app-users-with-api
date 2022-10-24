import React, { useContext, useEffect, useState } from 'react';
import { User } from './types/User';
import { UsersList } from './components/UsersList';
import { FilterBlock } from './components/FilterBlock';
import { Stack, Container, SelectChangeEvent } from '@mui/material';
import { AppContext } from './components/AppContext';

export const App = () => {
  const [users, setUsers] = useState<User[] | []>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [ageValue, setAgeValue] = useState<number[]>([20, 70]);
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [select, setSelect] = useState('');

  const { postsPerPage } = useContext(AppContext);

  const handleDeleteUser = (selectedUserEmail: string) => {
    setUsers((prev: User[]) => (prev.filter(el => el.email !== selectedUserEmail)))
  }

    useEffect(() => {

    const getUsers = () => {
      fetch(`https://randomuser.me/api/?page=${currentPage}&results=${+postsPerPage}&nat=ua&seed=foobar`)
        .then((response) => response.json())
        .then((response) => setUsers((prev) => (
          [...prev, ...response.results]
        )))

        .then(() => setLoading(false))
    }

    getUsers();
  }, [currentPage, postsPerPage])

  const indexOfLastPost = currentPage * +postsPerPage;
  const indexOfFirstPost = indexOfLastPost - +postsPerPage;
  const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setSelect(event.target.value as string);
  };

  const handleChangeAgeValue = (event: Event, newValue: number | number[]) => {
    setAgeValue(newValue as number[]);
  };

  const handleClickMale = () => {
    setMale(!male);
    if (female) {
      setFemale(false);
    }
  };

  const handleClickFemale = () => {
    setFemale(!female);
    if (male) {
      setMale(false);
    }
  };

  const prettyQuery = searchQuery.toLowerCase().trim();

  const filterUsers = (currentUsers: User[]) => {
    return currentUsers.filter(currentUser => (
      ((currentUser.name.first.toLowerCase().includes(prettyQuery))
        || (currentUser.name.last.toLowerCase().includes(prettyQuery)))
      && (
        currentUser.dob.age >= ageValue[0] && currentUser.dob.age <= ageValue[1]
      )
    ));
  };

  const filteredUsers = users.length 
  ? filterUsers(currentPosts) 
  : [];

  const sortUsers = (usersForSort: User[]) => {
    const getDateOfBirth = (date: string) => {
      return +`${date.slice(0, 4)}${date.slice(5, 7)}${date.slice(8, 10)}`
    }
    switch (select) {
      case 'name':
        return usersForSort.sort((a, b) => (`${a.name.first} ${a.name.last}`)
          .localeCompare(`${b.name.first} ${b.name.last}`));
      case 'birth':
        return usersForSort.sort((a, b) => getDateOfBirth(b.dob.date) - getDateOfBirth(a.dob.date));
      case 'city':
        return usersForSort.sort((a, b) => a.location.city.localeCompare(b.location.city));
      default:
        return usersForSort;
    }
  }

  const sorteredFilteredUsers = users.length
  ? sortUsers(filteredUsers) 
  : [];

  const sortByUserSex = (usersForSort: User[]) => {
    if (male) {
      return usersForSort.filter(user => user.gender === 'male');
    }

    if (female) {
      return usersForSort.filter(user => user.gender === 'female');
    }

    return usersForSort;
  }

  const preparedUsers =  users.length
  ? sortByUserSex(sorteredFilteredUsers)
  : [];

  return (
    <Container maxWidth="lg">
      <Stack
        direction="row"
        justifyContent="center"
      >
        <FilterBlock
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          ageValue={ageValue}
          handleChangeAgeValue={handleChangeAgeValue}
          male={male}
          female={female}
          handleClickMale={handleClickMale}
          handleClickFemale={handleClickFemale}
          select={select}
          handleChangeSelect={handleChangeSelect}
        />
        <UsersList
          users={preparedUsers}
          loading={loading}
          totalPosts={500}
          paginate={paginate}
          currentPage={currentPage}
          handleDeleteUser={handleDeleteUser}
        />
      </Stack>
    </Container>
  )
}

export default App;
