export const counterReducer = (state = 11, action) => {
    if(action.type === "INCREMENT") {
        state = state + action.payload;
    }else if(action.type === "DECREMENT") {
        state--;
    }
    return state;
}

export const authReducer = (state = false, action) => {
    if(action.type === "LOGIN") {
        state = true;
    }else if(action.type === "LOGOUT") {
        state = false;
    }

    return state;
}