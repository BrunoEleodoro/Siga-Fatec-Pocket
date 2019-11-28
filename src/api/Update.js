import { callAPI } from "../api/ApiConnector";

export function getUsuario() {
    return new Buffer.from(localStorage.getItem("usuario"), 'base64').toString('ascii');
}
export function getSenha() {
    return new Buffer.from(localStorage.getItem("senha"), 'base64').toString('ascii');
}



export function updateBasicInfo() {
    return new Promise((resolve, reject) => {
        callAPI("https://brunoeleodoro.com:3000/getBasicInfo", {
            usuario: getUsuario(),
            senha: getSenha()
        }).then((result) => {
            console.log('result', result)
            if (result.status != 200) {
                resolve(false)
            } else {
                resolve(result.response)
            }

        }).catch((ex) => {
            reject(false)
            console.log('error', ex)
        });
    })
}

export function updateClassHours() {
    return new Promise((resolve, reject) => {
        callAPI("https://brunoeleodoro.com:3000/getClassHours", {
            usuario: getUsuario(),
            senha: getSenha()
        }).then((result) => {
            resolve(result.response)
        }).catch((ex) => {
            reject(false)
            console.log('error', ex)
        });
    })
}

export function updateMissClasses() {
    return new Promise((resolve, reject) => {
        callAPI("https://brunoeleodoro.com:3000/getMissClasses", {
            usuario: getUsuario(),
            senha: getSenha()
        }).then((result) => {
            resolve(result.response)
        }).catch((ex) => {
            reject(false)
            console.log('error', ex)
        });
    })
}


export function updateSubjects() {
    return new Promise((resolve, reject) => {
        callAPI("https://brunoeleodoro.com:3000/getSubjects", {
            usuario: getUsuario(),
            senha: getSenha()
        }).then((result) => {
            resolve(result.response)
        }).catch((ex) => {
            reject(false)
            console.log('error', ex)
        });
    })
}

export function updateTestResults() {
    return new Promise((resolve, reject) => {
        callAPI("https://brunoeleodoro.com:3000/getTestResults", {
            usuario: getUsuario(),
            senha: getSenha()
        }).then((result) => {
            resolve(result.response)
        }).catch((ex) => {
            reject(false)
            console.log('error', ex)
        });
    })
}

export function updateSubjectResources() {
    return new Promise((resolve, reject) => {
        callAPI("https://brunoeleodoro.com:3000/getSubjectResources", {
            usuario: getUsuario(),
            senha: getSenha(),
            subject: 'all'
        }).then((result) => {
            resolve(result.response)
        }).catch((ex) => {
            reject(false)
            console.log('error', ex)
        });
    })
}