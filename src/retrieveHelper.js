const fetchRetrieve = async () => {
    // 'http://localhost:5000/wishList/'
        const options = {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type' : 'application/json'}}
        const response = await fetch('https://shoe-shop-661m.vercel.app/wishList',options).catch((err) => {console.log(err)})
        const resData = await response.json()

        return resData
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