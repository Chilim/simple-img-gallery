import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const images = [
    '/images/pic1.jpg',
    '/images/pic2.jpg',
    '/images/pic3.jpg',
    '/images/pic4.jpg',
    '/images/pic5.jpg',
    '/images/pic6.jpg',
    '/images/pic7.jpg',
    '/images/pic8.jpg',
];

ReactDOM.render(<App images={images}/>, document.getElementById('container'));

serviceWorker.unregister();
