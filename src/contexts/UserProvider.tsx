import React, { PropsWithChildren, useReducer } from 'react';
import { initialState, reducer, UserDispatchContext, UserStateContext } from './userContext';

const UserProvider = ({ children }: PropsWithChildren) => {
  
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
      
      <UserStateContext.Provider value={state}>
        <UserDispatchContext.Provider value={dispatch}>
          {children}
        </UserDispatchContext.Provider>
      </UserStateContext.Provider>
    )
}

export default UserProvider;