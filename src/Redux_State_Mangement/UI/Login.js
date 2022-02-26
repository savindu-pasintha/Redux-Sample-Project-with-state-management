import React from 'react';

//ape initialState eke data object ekt aluth values denn use krnne ok : useDispatch
import { useDispatch } from 'react-redux';
import { login } from '../Reducer_Actions';

export default function Login() {
    const dispatch = useDispatch();
    //dispatch({ name: "kamal", age: "20", email: "ex@gmail.com" });

    return (
        <div>Login page
            <div>
                <button onClick={() => { dispatch(login({ name: "kamal", age: "20", email: "ex@gmail.com" })); }}>Login</button>
            </div>
        </div>
    )
}
