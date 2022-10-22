import React, { ReactNode, useState } from 'react';
import { useLocalStorage } from './LocalStorage';

export const AppContext = React.createContext({
  postsPerPage: '50',
  setPostsPerPage(value: string) {this.postsPerPage = value},
  selectedUserEmail: '',
  setSelectedUserEmail(value: string) {this.postsPerPage = value}
});

export const AppContextProvider = ({children}: {children: ReactNode}) => {

  const [postsPerPage, setPostsPerPage] = useLocalStorage('postPerPage', '50');
  const [selectedUserEmail, setSelectedUserEmail] = useState('');
  

  return (
    <AppContext.Provider
      value={{
        postsPerPage,
        setPostsPerPage,
        selectedUserEmail,
        setSelectedUserEmail
      }}
    >
    {children}
    </AppContext.Provider>
  )
};