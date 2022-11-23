const respSuccess = (data = null, message = "Success") => {
    return {
        success: true,
        message, data
    }
}

const respError = (message = "Error", data = null) => {
    return {
        success: false,
        message, data
    }
}

export {
    respSuccess,
    respError
}
