export default function handleResponseFromAPI(promise) {
  const resp = { status: 200, body: 'success' };
  return promise
    .then(() => resp)
    .catch(() => new Error())
    .finally(() => {console.log('Got a response from the API');});
}
