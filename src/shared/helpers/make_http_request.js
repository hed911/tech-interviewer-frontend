export const makeHTTPRequest = async (url, callback= null) => {
  const response = await fetch(url, { headers: {'Content-Type': 'application/json'}})
  const data = await response.json()
  if (callback) {
    callback(data)
  }
  return data
}
