import { GET_TODOS_FAILED, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "../Constents/Constents"


const initialTodosState = {

    isLoading: false,
    todos: [],
    errorMessage: null

}
const TodosReducer = (state = initialTodosState, action) => {

    switch (action.type) {
        case GET_TODOS_REQUEST: return {

            ...state,
            isLoading: true
        }

        case GET_TODOS_SUCCESS: return {
            ...state,
            isLoading: false,
            todos: action.payload
        }

        case GET_TODOS_FAILED: return {

            ...state,
            errorMessage: action.payload
        }



        default:
            return state;
    }


}

export default TodosReducer;