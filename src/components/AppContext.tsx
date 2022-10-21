import React, { ReactNode } from 'react';
import { useLocalStorage } from './LocalStorage';

export const AppContext = React.createContext({
  postsPerPage: '50',
  setPostsPerPage(value: string) {this.postsPerPage = value},
});

export const AppContextProvider = ({children}: {children: ReactNode}) => {

  const [postsPerPage, setPostsPerPage] = useLocalStorage('postPerPage', '50');

  return (
    <AppContext.Provider
      value={{
        postsPerPage,
        setPostsPerPage
      }}
    >
    {children}
    </AppContext.Provider>
  )
};