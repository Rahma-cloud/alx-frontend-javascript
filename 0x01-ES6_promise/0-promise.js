export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const success = true;

    if (success) {
      resolve('Pass');
    } else {
      reject(new Error('Fail'));
    }
  });
}
