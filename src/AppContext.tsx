import React from 'react';

interface IAction {
  type: string;
  payload: any;
}

export interface IState {
  phoneNumber: string | null;
  passcode: string | null;
  verifyCode: string;
  personalInfo: {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    gender: string;
  } | null;
  address: {
    address1: string;
    address2: string;
    city: string;
    state: string;
    zipcode: string;
  } | null;
}

interface IContextProps {
  appData: IState;
  appDispatch: (action: IAction) => void;
}
export const AppContext = React.createContext<IContextProps>({
  phoneNumber: null,
  passcode: null,
} as any);

export const PHONE_NUMBER_ADDED = 'phoneNumberAdded';
export const PASSCODE_CREATED = 'passcodeCreated';
export const VERIFY_CODE_CREATED = 'createVerifyCode';
export const PERSONAL_INFO_ADDED = 'personalInfoAdded';
export const ADDRESS_ADDED = 'addressAdded';

export const AppProvider: React.FC = ({children}) => {
  const reducer = (state: IState, {type, payload}: IAction) => {
    switch (type) {
      case PHONE_NUMBER_ADDED:
        return {...state, phoneNumber: payload};
      case PASSCODE_CREATED:
        return {...state, passcode: payload};
      case VERIFY_CODE_CREATED:
        return {...state, verifyCode: payload};
      case PERSONAL_INFO_ADDED:
        return {...state, personalInfo: payload};
      case ADDRESS_ADDED:
        return {...state, address: payload};
      default:
        return state;
    }
  };
  const [appData, appDispatch] = React.useReducer(reducer, {
    phoneNumber: null,
    passcode: null,
    verifyCode: '',
    personalInfo: null,
    address: null,
  });
  return (
    <AppContext.Provider value={{appData, appDispatch} as any}>
      {children}
    </AppContext.Provider>
  );
};
