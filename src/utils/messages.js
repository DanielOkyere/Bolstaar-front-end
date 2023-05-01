import { notification } from 'antd'

/**
 *
 * @param msg
 * @constructor
 */
export const TlaSuccess = (msg = null) => (
  notification.success({
    message: 'Success',
    description: msg,
    placement: 'top'
  })
)

/**
 *
 * @param msg
 * @constructor
 */
export const TlaWarning = (msg = null) => (
  notification.warning({
    message: 'Warning',
    description: msg,
    placement: 'top'
  })
)

/**
 *
 * @param msg
 * @constructor
 */
export const TlaError = (msg = null) => (
  notification.warning({
    message: 'Error',
    description: msg,
    placement: 'top'
  })
)
