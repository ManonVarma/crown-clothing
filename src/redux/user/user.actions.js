import { UserActionTypes } from "./user.types";

// This function returns an action object
export const setCurrentUser = (user) => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});


