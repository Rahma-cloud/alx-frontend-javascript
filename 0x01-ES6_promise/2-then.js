export default function handleResponseFromAPI(promise) {
  if (promise && typeof promise.then === 'function') {
    promise
      .then(() => {
        console.log('Got a response from the API');
        return {
          status: 200,
          body: 'success',
        };
      })
      .catch(() => {
        console.log('Got a response from the API');
        return new Error();
      });
  } else {
    console.error('');
  }
}
