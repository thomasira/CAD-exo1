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
        this.cursor = { x: 0, y: 0 };
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

        /* listen for HTML actions */
        window.addEventListener('resize', () => this.getFrameSize());
        window.addEventListener('mousemove', (e) => this.getCursor(e));
        
        /* append rendered area in HTML DOM */
        this.elFrame.appendChild( this.renderer.domElement );
        
        /* create light source and add to scene*/
        const directionalLight = new THREE.DirectionalLight( 0xcfe2f3, .8 );
        directionalLight.castShadow = true;
        directionalLight.position.set(20, 20, 30)
        this.scene.add( directionalLight );

        /* create object(geometry, material) and add to scene*/
        const texture = new THREE.TextureLoader().load('./map/earth.jpg');
        const normal = new THREE.TextureLoader().load('./map/normal.jpg');
        const material = new THREE.MeshStandardMaterial( {
            map: texture,
            normalMap: normal 
        } ); 
        const geometry = new THREE.SphereGeometry( 15, 64, 32 );  
        this.earth = new THREE.Mesh( geometry, material );
        this.scene.add( this.earth );

        /* resize camera postion and aspect */
        this.camera.position.z = 80;
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

        /* set camera position in relation to cursor position on page */
        const parallaxX = this.cursor.x;
        const parallaxY = - this.cursor.y;
        this.camera.position.x = parallaxX;
        this.camera.position.y = parallaxY;
        this.camera.position.z = 80 - ((parallaxX-parallaxY)*10);

        /* render */
        this.renderer.render( this.scene, this.camera );
    }

    /**
     * update this.cursor with cursor position on page
     * @param {event} e 
     */
    getCursor(e) {
        this.cursor.x = e.clientX/this.sizes.width *2;
        this.cursor.y = e.clientY/this.sizes.height *2;
    }

    /**
     * update renderer area size in relation to size of page
     */
    getFrameSize() {
        this.sizes.width = this.elFrame.getBoundingClientRect().width;
        this.sizes.height = this.elFrame.getBoundingClientRect().height;

        this.camera.aspect = this.sizes.width/this.sizes.height;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }

}