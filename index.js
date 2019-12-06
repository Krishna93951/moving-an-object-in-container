// Import stylesheets
const viewModule = require('./view.js');
import './style.css';
// Write Javascript code!
var render = new viewModule.viewInstance('#root');
render.init();
// let container = document.getElementById('container');
// let object = document.querySelector('#object');
