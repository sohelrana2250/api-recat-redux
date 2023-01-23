import { getTodosFailed, getTodosRequest, getTodosSuccess } from "../Action/TodosAction";
import axios from 'axios';

const FetchData = () => {


    return async (dispatch) => {

        dispatch(getTodosRequest());
        axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => {

            // console.log(res.data);


            // const title = res.data.map((v) => v.title);
            dispatch(getTodosSuccess(res.data));

        }).catch((error) => {
            console.log(error.message);
            dispatch(getTodosFailed(error.message));
        })



    }


}

export default FetchData;