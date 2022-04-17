import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import "./css/style.css"

class threeElement {
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 10000);
        this.light = new THREE.AmbientLight(0xFFFFFF, 1.0);
        this.renderer = new THREE.WebGLRenderer();

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    }

    init() {
        this.camera.position.set(0, -500, 0);
        this.camera.lookAt(0, 0, 0);

        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.target.set(0, 0, 0);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.5;
        this.controls.enableZoom = false;
    }
}

class targetObject {
    constructor() {
        this.cube;
    }
    
    init() {
        const geometry = new THREE.BoxGeometry(100, 100, 100);
        const material = new THREE.MeshNormalMaterial();
        this.cube = new THREE.Mesh(geometry, material);
        this.cube.position.set(0, 0, 0);
    }

    rotate() {
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
    }
}

let three = new threeElement();
let target = new targetObject();

window.addEventListener('load', function() {
    init();
    animate();
});

function init() {
    three.init();
    target.init();
    three.scene.add(three.camera, target.cube);
}

function animate() {
    target.rotate();
	three.renderer.render( three.scene, three.camera );
    three.controls.update();
	requestAnimationFrame( animate );
}