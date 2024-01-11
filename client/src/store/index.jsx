import { proxy } from 'valtio';

const state = proxy({
    intro: true, // are we on the home page or not?
    color: '#EFBD48',
    isLogoTexture: true, // is the logo displaying?
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png',
});

export default state;