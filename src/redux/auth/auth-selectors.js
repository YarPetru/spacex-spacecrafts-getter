export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getFetchingCurrent = state => state.auth.isFetchingUser;

export const getUserName = state => state.auth.user.name;

export const getIsPendingState = state => state.auth.isPending;
