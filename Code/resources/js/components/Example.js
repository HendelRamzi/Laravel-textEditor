import React from 'react';
import ReactDOM from 'react-dom';

import { Navbar } from './Navbar';
import { SectionOne } from './SectionOne';



function Example() {
    return (
        <div className="container-fluid">
            <Navbar />
            <SectionOne title= "This is a title" image="{{ asset('public/Images/pic1.jpg') }}"/>
            <SectionOne title= "This is a second title" image="{{ asset('public/Images/pic1.jpg') }}"/>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
