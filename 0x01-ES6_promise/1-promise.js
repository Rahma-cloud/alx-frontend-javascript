export default function getResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      const result = {
        status: 200,
        body: 'Success',
      };
      resolve(result);
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
