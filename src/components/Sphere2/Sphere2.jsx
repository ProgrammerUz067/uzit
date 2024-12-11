import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Set up the scene, camera, and renderer

import React from 'react';

export default function Sphere2() {
  const sphere2 = React.useRef(null);

  React.useEffect(() => {
    const textureLoader = new THREE.TextureLoader();

    const normalTexture = textureLoader.load('./normalMap.jpg');

    const canvas = document.querySelector('canvas.webgl');

    // Scene
    const scene = new THREE.Scene();

    // Objects
    const geometry = new THREE.SphereGeometry(0.5, 32, 32);
    // Materials

    const material = new THREE.MeshStandardMaterial();
    material.metalness = 0.1;
    material.roughness = 0.8;
    material.normalMap = normalTexture;
    material.color = new THREE.Color(0xffffff);

    // Mesh
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Lights

    const pointLight = new THREE.PointLight(0xffffff, 2);
    pointLight.position.x = 2;
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
    camera.position.x = 0;
    camera.position.y = 0;
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
      alpha: true,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    /**
     * Animate
     */

    const clock = new THREE.Clock();

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      // Update objects
      sphere.rotation.y = 0.5 * elapsedTime;

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
