export default function handleResponseFromAPI(promise) {
    return Promise
        .then((response) => {
            console.log("Got a response from the API");

            return {
                const result = {
                    status: 200,
                    body: 'Success',
                };

                resolve(result);
            } else {
                reject("The fake API is not working currently");
            }
    });
}
