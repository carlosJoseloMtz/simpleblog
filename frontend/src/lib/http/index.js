
const isJsonResponse = response => {
  return response &&
    response.headers &&
    response.headers.get('content-type').indexOf('application/json') !== -1
}

const ERROR_CODES = [
  400, 404, 500
]

const UNAUTHORIZED_CODE = [
  401, 403
]

const transformToJson = response => {

  if (!response) {
    throw Error('There was no response from the server!')
  }

  const statusResp = response.status

  if (ERROR_CODES.indexOf(statusResp) !== -1) {
    throw Error(`This is an error ${statusResp}`)
  }

  if (UNAUTHORIZED_CODE.indexOf(statusResp) !== -1) {
    console.error('unauthorized')
    // TODO: call the state handler to redirect or something
    throw Error('Unauthorized access')
  }

  if (isJsonResponse(response)) {
    return response.json()
  }

  throw Error('Something went wrong since all response are supposed to be JSON D:')
}

const createHeaders = isAuthorized => {
  const headers = new Headers()

  headers.append('content-type', 'application/json')

  if (isAuthorized) {
    headers.append('Authorization', localStorage.getItem('token'))
  }

  return headers
}

const post = ({ url, payload, isAuthorized }) => {
  return fetch(url, {
      method: 'post',
      body: JSON.stringify(payload),
      mode: 'cors',
      headers: createHeaders(isAuthorized)
    })
    .then(transformToJson)
}

const get = ({ url, payload, isAuthorized }) => {

  const reqURL = new URL(url)

  // if we have some parameters to be sent over the GET request
  if (payload) {
    // map each of those (hopefully no objects :V)
    Object.keys(payload).forEach(key => {
      reqURL.searchParams.append(key, payload[key])
    })
  }

  // create the string URL to be used
  return fetch(reqURL.toString(), {
      mode: 'cors',
      headers: createHeaders(isAuthorized)
    })
    .then(transformToJson)
}

export { post, get }
