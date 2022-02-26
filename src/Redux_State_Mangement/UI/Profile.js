import React from 'react';

//ape initialState eke data object ek thin value argann use krnne: useSelector
import { useSelector } from 'react-redux';


export default function Profile() {
    //index.js eke reduser ekekn userFromIndexj el access krn ek -> features eke initial stste eke value kiyn obj ek
    const dataObj = useSelector((state) => state.userFromIndexjs.value);

    return (
        <div>Profile
            <div>
                <h1>Name : {dataObj.name}</h1>
                <h1>Age :{dataObj.age} </h1>
                <h1>Email : {dataObj.email} :</h1>
            </div>
        </div>
    )
}
