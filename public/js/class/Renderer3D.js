import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export default class renderer3D{

    constructor(){
        this.elFrame = document.querySelector('[data-js-3d]');
        this.sizes = {
            width: this.elFrame.getBoundingClientRect().width,
            height: this.elFrame.getBoundingClientRect().height,
        }
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 75, this.sizes.width / this.sizes.height, 0.1, 1000 );
        this.renderer = new THREE.WebGLRenderer({ alpha: true });
        this.can;
        this.cursor = { x: 0, y: 0 };
        this.init()
    }

    init() {

        this.renderer.setSize( this.sizes.width, this.sizes.height );
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        window.addEventListener('resize', () => this.getFrameSize());
        window.addEventListener('mousemove', (e) => this.getCursor(e));
        
        this.elFrame.appendChild( this.renderer.domElement );
        
        const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
        directionalLight.castShadow = true;
        directionalLight.position.set(1, 2, 10)
        this.scene.add( directionalLight );


        const loader = new GLTFLoader();
        loader.load('./model/scene.gltf', (gltf) => {
            this.can = gltf.scene;
            this.can.rotation.z = .5;

	        this.scene.add( this.can );
        }, undefined, function ( error ) {
	        console.error( error );
        });

        
        /* const geometry = new THREE.CylinderGeometry( 2, 2, 5, 32 ); 
        const material = new THREE.MeshPhysicalMaterial( { color: 0xE1ECF3 } );
        this.can = new THREE.Mesh( geometry, material );
        this.can.rotation.z = .3;
        this.scene.add( this.can ); */

        this.camera.position.z = 80;
        this.camera.aspect = this.sizes.width/this.sizes.height;
        this.animate();
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.can.rotation.y += 0.005;
        this.can.rotation.x += 0.0005;

        const parallaxX = this.cursor.x;
        const parallaxY = - this.cursor.y;
        this.camera.position.x = parallaxX;
        this.camera.position.y = parallaxY;

        this.renderer.render( this.scene, this.camera );
    }

    getCursor(e) {
        this.cursor.x = e.clientX/this.sizes.width *5;
        this.cursor.y = e.clientY/this.sizes.height *5;
    }

    getFrameSize() {
        this.sizes.width = this.elFrame.getBoundingClientRect().width;
        this.sizes.height = this.elFrame.getBoundingClientRect().height;

        this.camera.aspect = this.sizes.width/this.sizes.height;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }

}