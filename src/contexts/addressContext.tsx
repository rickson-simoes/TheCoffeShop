import { createContext, useState } from "react"
import { IAddressContext, IAddressContextProvider } from "../interfaces";
import { IFormInformationSchema } from "../pages/Checkout/userValidationSchema";

export const AddressContext = createContext({} as IAddressContext);

export function AddressContextProvider({ children }: IAddressContextProvider) {
  const [userInformation, setUserInformation] = useState({} as IFormInformationSchema);

  function addUserInformation(userInformation: IFormInformationSchema) {
    setUserInformation(userInformation);
  };

  return (
    <AddressContext.Provider value={{ addUserInformation, userInformation }}>
      {children}
    </AddressContext.Provider>
  )
};