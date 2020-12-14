import React from 'react';
import ReactDOM from 'react-dom';
import {Styleguide} from './StyleGuide';
import {ColorSchemes} from './ColorSchemes';

ReactDOM.render(
    <Styleguide colors={ColorSchemes} />,
    document.getElementById('root')
);