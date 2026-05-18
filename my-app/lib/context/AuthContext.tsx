import { ICredentials, IUserDetail } from "@/types/AuthType";
import { createContext } from "react";


export interface IAuthContext {
  login:(credentials: ICredentials)=> Promise<IUserDetail | void>,
  getLoggedInUser:() => Promise<IUserDetail|void>,
  loggedInUser: IUserDetail | undefined
}

const AuthContext = createContext<IAuthContext>({
  login: async () => {},
  getLoggedInUser: async () => {},
  loggedInUser: undefined
})

export default AuthContext