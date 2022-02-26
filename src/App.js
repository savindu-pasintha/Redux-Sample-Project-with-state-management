import React from 'react';
import Login from './Redux_State_Mangement/UI/Login';
import Profile from './Redux_State_Mangement/UI/Profile';

export default function App() {
    return (
        <div>
            <h1>https://redux-toolkit.js.org/usage/usage-guide</h1>
            <h4>npm install redux react-redux @redux/toolkit --save</h4>
            <Profile />
            <Login />
        </div>
    )
}
