import { Types } from './Types'

export const authenticate = (payload) => {
  return {
    type: Types.AUTHENTICATE,
    payload
  }
}

export const addAuth = () => {
  return {
    type: Types.ADD_AUTH
  }
}

export const removeAuth = () => {
  return {
    type: Types.REMOVE_AUTH
  }
}

export const register = () => {
  return {
    type: Types.REGISTER
  }
}

export const verifyEmail = () => {
  return {
    type: Types.VERIFY_EMAIL
  }
}

export const getMyProfile = () => {
  return {
    type: Types.GET_MY_PROFILE
  }
}
