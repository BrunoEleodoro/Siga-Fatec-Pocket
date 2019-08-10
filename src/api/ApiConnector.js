export function callAPI(url, data) {
    return new Promise((resolve, reject) => {
        fetch(url, {
            crossDomain: true,
            method: "POST",
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
        }).then(function (response) {
            resolve(response.json())
        }, function (error) {
            reject(error)
        })
    })

}