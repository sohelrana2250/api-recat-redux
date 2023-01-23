import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FetchData from '../FatchData/FetchData';
const Todos = () => {

    const { isLoading, todos, errorMessage } = useSelector(state => state);
    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(FetchData())


    }, [])


    return (
        <div>
            <h2>Todos-Api</h2>
            {isLoading && <h2>isLoading ....</h2>}
            {
                errorMessage && { errorMessage }
            }
            {
                todos.map((v, index) => <p key={index}> <b>ID: </b> {v.id} <b>Title : </b> {v.title}</p>)
            }

        </div>
    );
};

export default Todos;