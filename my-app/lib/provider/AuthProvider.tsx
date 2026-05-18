'use client'
import { ReactNode, useState } from "react";
import AuthContext from "../context/AuthContext";
import { ICredentials, IUserDetail } from "@/types/AuthType";
import axiosInstance from "../config/axiosClient";
import Cookies from "js-cookie";

const AuthProvider = ({children}: Readonly<{children: ReactNode}>) => {
  const [loggedInUser, setLoggedInUser] = useState<IUserDetail|undefined>()
  
  const getLoggedInUser = async() => {
    try {
      const loggedInUserResponse = (await axiosInstance.get("/auth/me")) as unknown as IUserDetail;
      setLoggedInUser(loggedInUser)
      return loggedInUserResponse
    } catch {

    }
  }
  
  const login = async (data: ICredentials) => {
    try {
      const response = (await axiosInstance.post("/auth/login", data)) as unknown as {accessToken: string}
      Cookies.set("_at_61", response.accessToken)
      return await getLoggedInUser();
    } catch {

    }
  }

  return (
    <AuthContext.Provider
      value={{
        login: login,
        getLoggedInUser: getLoggedInUser,
        loggedInUser: loggedInUser
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider