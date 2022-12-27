<template>

  <canvas id="bg"></canvas>
  
  
</template>

<script>
import { onMounted } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

export default {
  data() {
    return {
      scene: {},
      camera: {},
      renderer: {},
      controls: {}
    };
  },
  mounted() {
    this.init();
    this.animate();
  },
  methods: {
    init() {
      this.scene = new THREE.Scene();
     
      this.camera = new THREE.PerspectiveCamera ( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

      this.renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#bg'),
      });

      this.renderer.setPixelRatio( window.devicePixelRatio );
      this.renderer.setSize( window.innerWidth, window.innerHeight );
      this.camera.position.setZ(30);

      this.renderer.render( this.scene, this.camera);

      const pointLight = new THREE.PointLight(0xffffff)
      pointLight.position.set( 5,5,5)

      const ambientLight = new THREE.AmbientLight(0xffffff);
      this.scene.add(pointLight, ambientLight)

      const lightHelper = new THREE.PointLightHelper(pointLight)
      const gridHelper = new THREE.GridHelper(200, 50);

      this.scene.add(lightHelper, gridHelper);

      this.controls = new OrbitControls( this.camera, this.renderer.domElement);

      this.renderer.render( this.scene, this.camera );
      controls.update();

    },

    animate() {
      requestAnimationFrame( this.animate );
      this.controls.update()
      this.renderer.render( this.scene, this.camera );
    },
    
}
}
</script>

<style>
canvas {
  position: fixed;
  top: 0;
  left: 0;
}

h1{
  color: WHITE;
}
</style>