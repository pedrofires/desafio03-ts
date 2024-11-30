import { createContext, useEffect, useState } from "react";
import { getAllLocalStorage } from "../services/storage";
import { IDIoBank } from "../models/IDioBank";

interface IAppContext {
  user: IDIoBank | undefined;
}

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<IDIoBank>();
  const myCredentials = getAllLocalStorage();

  useEffect(() => {
    if (myCredentials) {
      const userData = JSON.parse(myCredentials);
      setUser(userData);
    }
  }, [myCredentials]);

  return <AppContext.Provider value={{ user }}>{children}</AppContext.Provider>;
};
