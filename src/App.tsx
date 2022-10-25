import React, { useContext, useEffect, useState } from 'react';
import { User } from './types/User';
import { UsersList } from './components/UsersList';
import { FilterBlock } from './components/FilterBlock';
import { Stack, Container, SelectChangeEvent } from '@mui/material';
import { AppContext } from './components/AppContext';
import { useLocalStorage } from './components/LocalStorage';

export const App = () => {
  const [users, setUsers] = useLocalStorage<User[]>('users', []);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useLocalStorage('currentPage', 1);
  const [searchQuery, setSearchQuery] = useState('');
  const [ageValue, setAgeValue] = useState<number[]>([20, 70]);
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [select, setSelect] = useState('');

  const { postsPerPage } = useContext(AppContext);

  const handleDeleteUser = (userId: string) => {
    setUsers((prev: User[]) => (prev.filter(el => el.login.uuid !== userId)))
  }

  const handleRenameUser = (userId: string, userName: string) => {
    setUsers(newUsers => newUsers.map(user => {

      if (user.login.uuid !== userId) {
        return user;
      }

      return {
        ...user, name: {
          ...user.name,
          fullname: userName
        }
      };
    }))
  };

  const handleChangeEmail = (userId: string, userEmail: string) => {
    setUsers(newUsers => newUsers.map(user => {

      if (user.login.uuid !== userId) {
        return user;
      }

      return {
        ...user, email: userEmail
      };
    }))
  };

  const handleChangePhone = (userId: string, userPhone: string) => {
    setUsers(newUsers => newUsers.map(user => {

      if (user.login.uuid !== userId) {
        return user;
      }

      return {
        ...user, phone: userPhone
      };
    }))
  };

  const handleChangeCity = (userId: string, userCity: string) => {
    setUsers(newUsers => newUsers.map(user => {

      if (user.login.uuid !== userId) {
        return user;
      }

      return {
        ...user, location: {
          ...user.location,
          city: userCity
        }
      };
    }))
  };

  const handleChangeAdress = (userId: string, userAdress: string) => {
    setUsers(newUsers => newUsers.map(user => {

      if (user.login.uuid !== userId) {
        return user;
      }

      return {
        ...user, location: {
          ...user.location,
          street: {
            ...user.location.street,
            adress: userAdress
          }
        }
      };
    }))
  };

  const handleChangeDate = (userId: string, userDate: string) => {
    setUsers(newUsers => newUsers.map(user => {

      if (user.login.uuid !== userId) {
        return user;
      }

      return {
        ...user, 
        dob: {
          ...user.dob,
          date: userDate
        }
      };
    }))
  };

  useEffect(() => {

    const getUsers = () => {
      fetch(`https://randomuser.me/api/?page=${currentPage}&results=${+postsPerPage}&nat=ua&seed=foobar`)
        .then((response) => response.json())
        .then((response) => setUsers(response.results.map((user: User) => {
          return {
            ...user,
            name: {
              ...user.name,
              fullname: `${user.name.first} ${user.name.last}`
            },
            phone: `+38${user.phone.slice(1, 4)}${user.phone.slice(6, 9)}${user.phone.slice(10, 14)}`,
            location: {
              ...user.location,
              street: {
                ...user.location.street,
                adress: `${user.location.street.name} ${user.location.street.number}`
              }
            },
            dob: {
              ...user.dob,
              date: `${user.dob.date.slice(8, 10)}.${user.dob.date.slice(5, 7)}.${user.dob.date.slice(0, 4)}`,
            }
          }
        })))
        .then(() => setLoading(false))
    }

    getUsers();
  }, [currentPage, postsPerPage])

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
      (currentUser.name.fullname.toLowerCase().includes(prettyQuery))
      && (
        currentUser.dob.age >= ageValue[0] && currentUser.dob.age <= ageValue[1]
      )
    ));
  };

  const filteredUsers = filterUsers(users);

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

  const sorteredFilteredUsers = sortUsers(filteredUsers)

  const sortByUserSex = (usersForSort: User[]) => {
    if (male) {
      return usersForSort.filter(user => user.gender === 'male');
    }

    if (female) {
      return usersForSort.filter(user => user.gender === 'female');
    }

    return usersForSort;
  }

  const preparedUsers = sortByUserSex(sorteredFilteredUsers);

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
          handleRenameUser={handleRenameUser}
          handleChangeEmail={handleChangeEmail}
          handleChangePhone={handleChangePhone}
          handleChangeCity={handleChangeCity}
          handleChangeAdress={handleChangeAdress}
          handleChangeDate={handleChangeDate}
          setUsers={setUsers}
          select={select}
        />
      </Stack>
    </Container>
  )
}

export default App;
