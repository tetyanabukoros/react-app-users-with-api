export interface User {
  [x: string]: any
  picture:{
    large: string,
    medium: string,
    thumbnail: string,
  },
  email: string,
  name: {
    title: string,
    first: string,
    last: string,
    fullname: string
  },
  location:
    {street: {
        number: number,
        name: string,
      },
      city: string,
      state: string,
      country: string,
      postcode: number,
      coordinates: {
        latitude: number,
        longitude: number,
      },
      timezone: {
        offset: string,
        description: string,
      }},
      dob: {
        date: string,
        age: number
      },
  gender:"male" | "female",
  phone: string,
  userId: number | undefined
}
