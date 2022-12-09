const axios = require('axios')

const fetchSearch = async (searchTerm, path) => {
    const options = {
        method: 'GET',
        url: path,
        params: {limit: '10', query: searchTerm},
        headers: {
            'X-RapidAPI-Key': '19639a7495mshd64ec1f3cf8514fp1a8dd7jsnb569ba57c5f3',
            'X-RapidAPI-Host': 'the-sneaker-database.p.rapidapi.com'  
        }
    }

    const response = await axios.request(options)
    const resData = await response.json()
    return resData.results
}

const wrapPromise = (promise) => {
    let status = 'pending'
    let result = ''

    let suspender = promise.then(response => {
        status = 'success'
        result = response
    }, err => {
        status = 'error'
        result = err
    })

    return {
        read() {
            if(status === 'pending') {
                throw suspender
            }
            else if (status === 'error') {
                throw result
            }
            return result
        }
    }
}

export const createResource = (searchTerm, path) => {
    return {
        result: wrapPromise(fetchSearch(searchTerm, path))
    }
}