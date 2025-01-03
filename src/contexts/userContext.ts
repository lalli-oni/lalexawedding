import { createContext, Dispatch } from "react";

export interface UserContextState {
  residency?: 'Iceland' | 'Other';
  // Suggestion: language
  // Suggestion: has kids
  // Suggestion: special catering requirements
  // Note: Could separate small/large cabins
  // Note: 'other' is fx. guesthouses/airbnb in Akranes
  preferredLodging?: 'moar-cabins' | 'moar-room' | 'camping' | 'other';
}


type UserContextActionType =
	{
		type: 'SelectResidency',
		payload: UserContextState["residency"]
	} | 
	{
		type: 'SelectLodging',
		payload: UserContextState["preferredLodging"]
	};

export const reducer = (state: UserContextState, action: UserContextActionType): UserContextState => {
	switch (action.type) {
		case 'SelectResidency':
			return { ...state, residency: action.payload }
		case 'SelectLodging':
			return { ...state, preferredLodging: action.payload }
	}
}

export const initialState: UserContextState = {
  residency: undefined,
  preferredLodging: undefined
};

export const UserStateContext = createContext<UserContextState | null>(null);
export const UserDispatchContext = createContext<Dispatch<UserContextActionType> | null>(null);