import api from '../../utils/api'
import sessionStorage from 'redux-persist/lib/storage/session'
import { authenticate, removeAuth } from './ActionCreators'

/**
 * @param data
 * @returns {function(*): Promise<unknown>}
 */
export const handleAuthentication = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    return api().post('/auth/local', data).then((response) => {
      dispatch(authenticate(response.data))
      resolve(response)
    }).catch((err) => {
      reject(err)
    })
  })
}

export const handleAuthenticateUser = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    api().get('/profile').then((response) => {
      dispatch(authenticate(response.data))
      resolve(response)
    }).catch((err) => {
      reject(err)
    })
  })
}

export const handleGoogleLogin = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    api().get('/connect/google').then((response) => {
      // dispatch(authenticate(response.data))
      resolve(response)
    }).catch((err) => {
      reject(err)
    })
  })
}

export const handleLogout = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    sessionStorage.removeItem('persist:root')
    dispatch(removeAuth())
    resolve()
  })
}

export const handleChangePassword = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    api().post('/auth/change-password', data).then((res) => {
      dispatch(authenticate(res.data))
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}

export const handleGetProfile = () => dispatch => {
  return new Promise((resolve, reject) => {
    api().get('/profile').then((response) => {
      dispatch(authenticate(response.data))
      resolve(response)
    }).catch((err) => {
      reject(err)
    })
  })
}

export const handleUpdateProfile = (data) => dispatch => {
  return new Promise((resolve, reject) => {
    api().put(`/profile/${data.user_info.id}`, data).then((response) => {
      dispatch(authenticate(response.data))
      resolve(response)
    }).catch((err) => {
      reject(err)
    })
  })
}

export const handleUploadDp = (data) => dispatch => {
  return new Promise((resolve, reject) => {
    api().post(`/profile/${data.id}/upload-dp`, data).then((response) => {
      dispatch(authenticate(response.data))
      resolve(response)
    }).catch((err) => {
      reject(err)
    })
  })
}

/**
 *
 * @param data
 * @returns {function(*): Promise<unknown>}
 */
export const handleRegistration = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    api().post('/auth/local/register', data).then((res) => {
      dispatch(authenticate(res.data))
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

export const handleResetPassword = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    api().post('/auth/reset-password', data).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}

export const handleForgotPassword = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    api().post('/forgot-password', data).then((response) => {
      dispatch(authenticate(response.data))
      resolve()
    }).catch((err) => {
      reject(err)
    })
  })
}

export const handleGetMyProfile = (token) => () => {
  return new Promise((resolve, reject) => {
    api(false).get('/users/me', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(() => {
      resolve()
    }).catch((err) => {
      reject(err)
    })
  })
}

export const handleEmailVerification = (url, token) => () => {
  return new Promise((resolve, reject) => {
    api(true).get(url).then(() => {
      resolve()
    }).catch((err) => {
      reject(err)
    })
  })
}

export const handlePinVerification = (data) => () => {
  return new Promise((resolve, reject) => {
    api().post('/auth/otp/verify', data).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}

export const handleResendEmailVerification = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    api().post('/auth/email/verify/resend')
      .then((res) => {
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
  })
}
