const fetchRetrieve = async () => {
        const options = {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type' : 'application/json'}}
        const response = await fetch('http://localhost:5000/wishList/',options).catch((err) => {console.log(err)})
        const resData = await response.json()

        console.log(resData.results)
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

export const createResource = () => {
    return {
        result: wrapPromise(fetchRetrieve())
    }
}