import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export default class renderer3D{

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

    init() {

        this.renderer.setSize( this.sizes.width, this.sizes.height );
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.elFrame.appendChild( this.renderer.domElement );
        
        const ambientLight = new THREE.AmbientLight( 0x3d85c6, 2 );
        this.scene.add( ambientLight );

        const geometry = new THREE.SphereGeometry( 15, 32, 16 ); 
        const texture = new THREE.TextureLoader().load('./model/earthBW.jpg');
        const material = new THREE.MeshStandardMaterial( {
            map: texture,
        } ); 
        this.earth = new THREE.Mesh( geometry, material );
        this.earth.rotation.z = .3;
        this.earth.position.set(0, 0, 0)
        this.scene.add( this.earth );

        this.camera.position.z = 30;
        this.camera.aspect = this.sizes.width/this.sizes.height;
        this.animate();
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.earth.rotation.y += 0.005;
        this.earth.rotation.x += 0.00005;
        this.renderer.render( this.scene, this.camera );
    }

    getCursor(e) {
        this.cursor.x = e.clientX/this.sizes.width *2;
        this.cursor.y = e.clientY/this.sizes.height *2;
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