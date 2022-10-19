// import { MovieData } from './types/MovieData';
import { ResponseError } from './types/ReponseError';
import { User } from './types/User';
// import { ResponseError } from './types/ReponseError';

const API_URL = 'https://randomuser.me/api/';

export function getUser(): Promise<User | ResponseError> {
  return fetch(`${API_URL}`)
    .then(res => res.json())
    .catch(() => ({
      Response: 'False',
      Error: 'unexpected error',
    }));
}
