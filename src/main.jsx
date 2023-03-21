import React from 'react';
import ReactDOM from 'react-dom/client';

import {HelloApp} from './HelloApp';
import './style.css'

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <HelloApp/>
    </React.StrictMode>
)

