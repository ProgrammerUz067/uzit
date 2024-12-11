import React from 'react';
import './Sphere.scss';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default function Sphere() {
  const sphereRef = React.useRef();

  React.useEffect(() => {
    // Texture loader
    const loader = new THREE.TextureLoader();
    const cross = loader.load('./cross.png');

    // Canvas
    const canvas = document.querySelector('canvas.webgl');

    // Scene
    const scene = new THREE.Scene();

    // Objects
    const geometry = new THREE.SphereGeometry(0.6, 60, 60);

    const particleGeometry = new THREE.BufferGeometry();
    const particlesCnt = 2000;

    const posArray = new Float32Array(particlesCnt * 3);

    for (let i = 0; i < particlesCnt * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // Materials

    const material = new THREE.PointsMaterial({
      size: 0.01,
    });

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.009,
      map: cross,
      transparent: true,
    });

    // Mesh
    const sphere = new THREE.Points(geometry, material);
    const particleMesh = new THREE.Points(particleGeometry, particlesMaterial);
    scene.add(sphere, particleMesh);

    // Lights

    const pointLight = new THREE.PointLight(0xffffff, 0.1);
    pointLight.position.x = 6;
    pointLight.position.y = 3;
    pointLight.position.z = 4;
    scene.add(pointLight);

    /**
     * Sizes
     */
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    window.addEventListener('resize', () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    /**
     * Camera
     */
    // Base camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
    camera.position.x = -1;
    camera.position.y = -0.1;
    camera.position.z = 2;
    scene.add(camera);

    // Controls
    // const controls = new OrbitControls(camera, canvas)
    // controls.enableDamping = true

    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(new THREE.Color('#262626'), 1);

    // mouse
    document.addEventListener('mousemove', animetaParticles);

    let mouseX = 0;
    let mouseY = 0;

    function animetaParticles(event) {
      mouseX = event.clientX;
      mouseY = event.clientY;
    }

    /**
     * Animate
     */

    const clock = new THREE.Clock();

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      // Update objects
      sphere.rotation.y = 0.5 * elapsedTime;

      if (mouseX > 0) {
        particleMesh.rotation.y = mouseY * (elapsedTime * 0.00008);
        particleMesh.rotation.x = -mouseX * (elapsedTime * 0.00008);
      }

      // Update Orbital Controls
      // controls.update()

      // Render
      renderer.render(scene, camera);

      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };

    tick();
  }, []);

  return (
    <div className="flex items-center w-full h-fit overflow-hidden">
      <canvas className="webgl"></canvas>
    </div>
  );
}
