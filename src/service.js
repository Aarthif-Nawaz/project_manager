const BASE_URL = process.env.NODE_ENV === "development" ? "http://localhost:8000" : "http://35.222.122.87"

export const signup = (payload) => {
    var requestOptions = {
        method: 'POST',
        body: JSON.stringify(payload)
    };

    return fetch(BASE_URL + "/user/", requestOptions)
        .then(response => response.json())
        .then(data => {
            return data
        })
}

export const login = (payload) => {
    var requestOptions = {
        method: 'POST',
        body: JSON.stringify(payload)
    };

    return fetch(BASE_URL + "/user/", requestOptions)
        .then(response => response.json())
        .then(data => {
            return data
        })
}

export const addProject = (payload) => {
    var requestOptions = {
        method: 'POST',
        body: JSON.stringify(payload)
    };

    return fetch(BASE_URL + "/project/", requestOptions)
        .then(response => response.json())
        .then(data => {
            return data
        })
}

export const addImage = (payload) => {
    var requestOptions = {
        method: 'PUT',
        body: payload
    };

    return fetch(BASE_URL + "/project/", requestOptions)
        .then(response => response.json())
        .then(data => {
            return data
        })
}

export const getProjects = (payload) => {
    var requestOptions = {
        method: 'POST',
        body: JSON.stringify(payload)
    };

    return fetch(BASE_URL + "/project/", requestOptions)
        .then(response => response.json())
        .then(data => {
            return data
        })
}

export const getImage = (payload) => {
    var requestOptions = {
        method: 'POST',
        body: JSON.stringify(payload)
    };

    return fetch(BASE_URL + "/project/", requestOptions)
        .then(response => response.json())
        .then(data => {
            return data
        })
}
