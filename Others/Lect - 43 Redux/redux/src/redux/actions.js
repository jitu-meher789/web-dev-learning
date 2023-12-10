export const increamentActionCreater = (value) => {
    return {
        type : "INCREMENT",
        payload : value
    }
}


export const decrementActionCreater = (value) => {
    return {
        type : "DECREMENT",
        payload : value
    }
}


export const loginActionCreater = (value) => {
    return {
        type : "LOGIN",
    }
}

export const logoutActionCreater = (value) => {
    return {
        type : "LOGOUT",
    }
}