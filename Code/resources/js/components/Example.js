import React from 'react';
import ReactDOM from 'react-dom';

import { Navbar } from './Navbar';

// Matrial UI imports
import Button from '@mui/material/Button';

function Example() {
    return (
        <div className="container">
            <Navbar />
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
