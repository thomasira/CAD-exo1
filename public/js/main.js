import HomeEarth from './class/HomeEarth.js';
import NavEarth from './class/NavEarth.js';

const elFrame = document.querySelector('[data-js-3d]');
if(elFrame) new HomeEarth(elFrame);

const elNavFrame = document.querySelector('[data-js-3dnav]');
if(elNavFrame) new NavEarth(elNavFrame);


