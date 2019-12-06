// Import stylesheets
import './style.css';

const viewModule = require('./view.js');
const appModule = require('./app.js');
// Write Javascript code!
var render = new viewModule.viewInstance('#root');
var events = new appModule.appInstance(render,'#object');
render.init();
events.init();

