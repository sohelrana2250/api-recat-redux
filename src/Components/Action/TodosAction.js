import { GET_TODOS_FAILED, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "../Constents/Constents"


export const getTodosRequest = () => {

    return {
        type: GET_TODOS_REQUEST
    }
}

export const getTodosSuccess = (todos) => {
    return {
        type: GET_TODOS_SUCCESS,
        payload: todos

    }
}

export const getTodosFailed = (errorMessage) => {

    return {
        type: GET_TODOS_FAILED,
        payload: errorMessage
    }
}