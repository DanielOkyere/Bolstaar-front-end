import { Types } from '../actions/authenticate/Types'

const initialState = {
  authUser: {},
  authToken: null,
  authenticated: false
}

/**
 *
 * @param state
 * @param action
 *
 * @returns {{authenticated: boolean, authToken: null, authUser: {}}|{authenticated: boolean, authToken: null, authUser: {}}|{authenticated: boolean, authToken, authUser: *}}
 */
export default function loginReducer (state = initialState, action) {
  switch (action.type) {
    case Types.AUTHENTICATE: {
      return {
        ...state,
        authenticated: true,
        authUser: action.payload.user,
        authToken: action.payload.jwt
      }
    }

    case Types.REMOVE_AUTH: {
      return {
        ...state,
        authenticated: false,
        authToken: null
      }
    }

    default:
      return state
  }
}
