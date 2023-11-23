import HomeEarth from './class/HomeEarth.js';
import NavEarth from './class/NavEarth.js';

const elFrame = document.querySelector('[data-js-3d]');
const elNavFrame = document.querySelector('[data-js-3dnav]');
if(elFrame) new HomeEarth(elFrame);
if(elNavFrame) new NavEarth(elNavFrame);


