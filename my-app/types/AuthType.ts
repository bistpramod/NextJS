import z from "zod";

// export type ICredentials = {
//   username: string;
//   password: string;
// };


export interface IUserDetail {
  id: number | string;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  birthDate: string;
  image: string;
  address: {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    country: string;
  };
  role: string;
}

export const LoginSchema = z.object({
  username: z.string().nonempty("Username is required").nonoptional(),
  password: z.string().nonempty("Password is required").nonoptional(),
});


export type ICredentials = z.infer<typeof LoginSchema>