import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export default class renderer3D{

    /**
     * set some basic properties for the renderer
     * @param {HTMLelement} elFrame 
     */
    constructor(elFrame){
        this.elFrame = elFrame
        this.sizes = {
            width: this.elFrame.getBoundingClientRect().width,
            height: this.elFrame.getBoundingClientRect().height,
        }
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 75, this.sizes.width / this.sizes.height, 0.1, 1000 );
        this.renderer = new THREE.WebGLRenderer({ alpha: true });
        this.earth;
        this.init()
    }

    /**
     * initialize and instanciate the renderer in the HMTL
     */
    init() {
        /* set default size and pixel ratio */
        this.renderer.setSize( this.sizes.width, this.sizes.height );
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        /* append rendered area in HTML DOM */
        this.elFrame.appendChild( this.renderer.domElement );
        
        /* create light source and add to scene*/
        const ambientLight = new THREE.AmbientLight( 0x3d85c6, 2 );
        this.scene.add( ambientLight );

        /* create object(geometry, material) and add to scene*/
        const geometry = new THREE.SphereGeometry( 15, 32, 16 ); 
        const texture = new THREE.TextureLoader().load('./map/earthBW.jpg');
        const material = new THREE.MeshStandardMaterial( {
            map: texture
        } ); 
        this.earth = new THREE.Mesh( geometry, material );
        this.scene.add( this.earth );

        /* resize camera postion and aspect */
        this.camera.position.z = 30;
        this.camera.aspect = this.sizes.width/this.sizes.height;

        /* call animation */
        this.animate();
    }

    /**
     * animation loop, renders are done every iteration
     */
    animate() {
        requestAnimationFrame(this.animate.bind(this));

        /* add x & y rotation to object every iteration */
        this.earth.rotation.y += 0.005;
        this.earth.rotation.x += 0.00005;

        /* render */
        this.renderer.render( this.scene, this.camera );
    }
}