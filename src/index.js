import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

console.log('order is confusing')

let items = [
    {
        id: 1,
        text: "Finish CSS",
        completed: false,
    },
    {
        id: 2,
        text: "Design task objects",
        completed: true,
    },
    {
        id: 3,
        text: "Create project",
        completed: false,
    },
    {
        id: 4,
        text: "Add functionality",
        completed: false,
    }
]



export default items



ReactDOM.render(<App />, document.getElementById('root'));




