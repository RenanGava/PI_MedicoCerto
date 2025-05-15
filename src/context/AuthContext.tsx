import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/axios";
import axios, { AxiosError } from "axios";
import { getItem, setItem } from "../services/asyncStorage";

interface ICreateUser {
  email: string;
  name: string;
  password: string;
  phone: string;
  isDoctor: false;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  jwt: string;
  refreshToken: string;
}

type LoginType = Omit<ICreateUser, "name" | "phone" | "isDoctor">;

interface AuthContextProps {
  // functions
  createUser: (data: ICreateUser) => Promise<void>;
  login: (data: LoginType) => Promise<void>;

  // params
  user: IUser | null;
  isAuthenticated: boolean
}

interface AuthContextProvider {
  children: ReactNode;
}

const AuthContext = createContext({} as AuthContextProps);

export function AuthContextProvider({ children }: AuthContextProvider) {
  const [user, setUser] = useState<IUser | null>(null);
  const isAuthenticated = !!user?.jwt

  useEffect(() => {
    async function getUser() {
      const jwt = await getItem("@JWT");

      // api.defaults.headers.common.Authorization = `Bearer ${jwt}`;

      const { data } = await api.get("users/datails-user");

      const formatUser: IUser = {
        id: data.user.id,
        name: data.user.name,
        email: data.user.email,
        phone: data.user.phone,
        jwt: data.token.jwt,
        refreshToken: data.token.refreshToken.id,
      };

      setUser(formatUser);
    }
    getUser();
  }, []);

  async function createUser(data: ICreateUser) {

  }

  async function login(dataUser: LoginType) {
    const { data } = await api.post("auth/login", dataUser);

    const formatUser: IUser = {
      id: data.user.id,
      name: data.user.name,
      email: data.user.email,
      phone: data.user.phone,
      jwt: data.token.jwt,
      refreshToken: data.token.refreshToken.id,
    };

    setUser(formatUser);
    await setItem("@JWT", data.token.jwt);
    await setItem("@RFTonken", data.token.refreshToken.id);
    api.defaults.headers.common.Authorization = `Bearer ${data.token.jwt}`;
  }

  return (
    <AuthContext.Provider value={{ createUser, login, user, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
