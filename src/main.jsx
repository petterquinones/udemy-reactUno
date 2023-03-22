import React from 'react';
import ReactDOM from 'react-dom/client';

import './style.css'
import { CounterApp } from './CounterApp';
// import {HelloApp} from './HelloApp';

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <HelloApp/> */}
        <CounterApp value={5}/>
    </React.StrictMode>
)

