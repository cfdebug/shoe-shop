const fetchSearch = async (searchTerm: string, path: string) => {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '19639a7495mshd64ec1f3cf8514fp1a8dd7jsnb569ba57c5f3',
            'X-RapidAPI-Host': 'the-sneaker-database.p.rapidapi.com'  
        }
    }

    const response = await fetch(path+searchTerm, options)
    const resData = await response.json()


    return resData.results
}

const wrapPromise = (promise: Promise<any>) => {
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

export const createResource = (searchTerm: string, path: string) => {
    return {
        result: wrapPromise(fetchSearch(searchTerm, path))
    }
}